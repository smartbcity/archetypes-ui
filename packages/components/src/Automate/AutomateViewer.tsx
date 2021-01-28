import React, { useEffect, useRef, useState } from "react";
import { Node, Network, Edge } from 'vis-network';
import { city } from "@smartb/s2-dsl-automate";
import { createStyles, makeStyles } from "@material-ui/core";
import { BasicProps, MergeReactElementProps } from "../Types";
import clsx from "clsx";
class Automate extends city.smartb.s2.dsl.automate.S2Automate { }

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            width: "100%",
            height: "500px"
        }
    })
)
const options = {
    "physics": {
        "enabled": true,
        "solver": "repulsion",
        "repulsion": {
            "damping": 0.9,
            "springConstant": 0.1,
            "springLength": 300,
            "nodeDistance": 150,
        }
    },
    "manipulation": {
        "enabled": false
    },
    "interaction": {
        "zoomView": false
    }
}

interface Data {
    edges: Edge[],
    nodes: Node[]
}

export interface AutomateViewerProps extends BasicProps {
    automate: Automate,
    onSelect?: (edgesSelected: Edge[], nodeSelected?: Node) => void
}

type Props = MergeReactElementProps<'input', AutomateViewerProps>

export const AutomateViewer = (props: Props) => {
    const { automate, onSelect, className, id, style, ...other } = props

    const defaultClasses = useStyles()
    const [network, setNetwork] = useState<Network | undefined>(undefined)
    const [data, setData] = useState<Data | undefined>(undefined)
    const containerRef = useRef<HTMLDivElement>(null)
    console.log(network)
    network && network.on('click', function (properties) {
        const edges = data?.edges?.filter((edge) => properties.edges.includes(edge.id))
        const node = data?.nodes?.find((node) => properties.nodes[0] === node.id)
        onSelect && onSelect(edges ?? [], node)
    });

    useEffect(() => {
        const selfRefSize: number[] = []
        const nodes: Node[] = [];
        let nbNodes = 0;
        const transitions = [automate.init, ...automate.transitions]
        //@ts-ignore
        const edges: Edge[] = transitions.map((trans: city.smartb.s2.dsl.automate.S2Transition, index) => {
            const from = !!trans.from ? trans.from.position + 1 : 0
            const to = trans.to.position + 1
            if (!selfRefSize[from]) selfRefSize[from] = 0
            if (from === to) selfRefSize[from]++
            nbNodes = Math.max(nbNodes, Math.max(to + 1));
            return {
                label: trans.role.toString() + ": " + trans.command.toString(),
                id: index,
                from: from,
                to: to,
                arrows: 'to',
                selfReference: {
                    size: selfRefSize[from] * 20,
                    angle: Math.PI / selfRefSize[from],
                    renderBehindTheNode: true
                },
            }
        });
        for (let i = 0; i < nbNodes; i++) {
            nodes.push({
                id: i,
                label: i.toString(),
                shape: "circle",
                margin: {
                    bottom: 30,
                    left: 30,
                    right: 30,
                    top: 30
                },
            });
        }
        setData({
            edges: edges,
            nodes: nodes
        })
    }, [automate])

    useEffect(() => {
        containerRef.current && data && setNetwork(new Network(containerRef.current, data, options))
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
};