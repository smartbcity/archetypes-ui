import React, { useEffect, useRef, useState } from 'react'
import { Node, Network, Edge } from 'vis-network'
import { city } from '@smartb/s2-dsl-automate'
import { BasicProps, MergeReactElementProps, lowLevelStyles } from '../Types'
import clsx from 'clsx'
import { useTheme } from '..'
class Automate extends city.smartb.s2.dsl.automate.S2Automate {}

const useStyles = lowLevelStyles({
  container: {
    width: '100%',
    height: '100%',
    outline: 'none',
    '& div': {
      outline: 'none'
    },
    '& canvas': {
      outline: 'none'
    }
  }
})

const options = {
  physics: {
    enabled: true,
    solver: 'repulsion',
    repulsion: {
      damping: 0.9,
      springConstant: 0.1,
      springLength: 300,
      nodeDistance: 150
    }
  },
  manipulation: {
    enabled: false
  },
  interaction: {
    zoomView: true
  }
}

interface Data {
  edges: Edge[]
  nodes: Node[]
}

export interface AutomateViewerBasicProps extends BasicProps {
  /**
   * The automate that wil be displayed in the viewer
   */
  automate: Automate
  /**
   * the event triggered when the user click on the different part of the viewer
   */
  onSelect?: (edgesSelected: Edge[], nodeSelected?: Node) => void
}

export type AutomateViewerProps = MergeReactElementProps<
  'div',
  AutomateViewerBasicProps
>

export const AutomateViewer = (props: AutomateViewerProps) => {
  const { automate, onSelect, className, id, style, ...other } = props
  const theme = useTheme()
  const defaultClasses = useStyles()
  const [network, setNetwork] = useState<Network | undefined>(undefined)
  const [data, setData] = useState<Data | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)
  network &&
    network.on('click', function (properties) {
      const edges = data?.edges?.filter((edge) =>
        properties.edges.includes(edge.id)
      )
      const node = data?.nodes?.find((node) => properties.nodes[0] === node.id)
      onSelect && onSelect(edges ?? [], node)
    })

  useEffect(() => {
    const selfRefSize: number[] = []
    const nodes: Node[] = []
    let nbNodes = 0
    const transitions = [automate.init, ...automate.transitions]
    //@ts-ignore
    const edges: Edge[] = transitions.map(
      (trans: city.smartb.s2.dsl.automate.S2Transition, index) => {
        const from = !!trans.from ? trans.from.position + 1 : 0
        const to = trans.to.position + 1
        if (!selfRefSize[from]) selfRefSize[from] = 0
        if (from === to) selfRefSize[from]++
        nbNodes = Math.max(nbNodes, Math.max(to + 1))
        return {
          label: trans.role.toString() + ': ' + trans.command.toString(),
          id: index,
          from: from,
          to: to,
          arrows: 'to',
          selfReference: {
            size: selfRefSize[from] * 20,
            angle: Math.PI / selfRefSize[from],
            renderBehindTheNode: true
          }
        }
      }
    )
    for (let i = 0; i < nbNodes; i++) {
      nodes.push({
        id: i,
        label: i.toLocaleString(),
        shape: 'circle',
        color: {
          border: theme.primaryColor,
          background: theme.secondaryColor + 'CC',
          highlight: {
            border: theme.primaryColor,
            background: theme.secondaryColor
          },
          hover: {
            background: theme.secondaryColor,
            border: theme.primaryColor
          }
        },
        borderWidth: 2,
        borderWidthSelected: 3,
        margin: {
          bottom: 30,
          left: 30,
          right: 30,
          top: 30
        }
      })
    }
    setData({
      edges: edges,
      nodes: nodes
    })
  }, [automate])

  useEffect(() => {
    containerRef.current &&
      data &&
      setNetwork(new Network(containerRef.current, data, options))
  }, [data, containerRef.current])

  return (
    <div
      id={id}
      style={style}
      className={clsx(
        defaultClasses.container,
        'AruiAutomateViewer-root',
        className
      )}
      ref={containerRef}
      {...other}
    />
  )
}
