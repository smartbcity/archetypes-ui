import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'
import { SBCard } from '@smartb/archetypes-ui-components'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '500px'
    }
  })
)

const GridOverview = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={3}>
        <SBCard
          style={{ height: '95%', width: '90%' }}
          logo='none'
          header='Item with xs = 3'
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </SBCard>
      </Grid>
      <Grid item xs={9}>
        <Grid item xs={6}>
          <SBCard
            style={{ height: '90%', width: '90%' }}
            header='Item with xs = 6 in container xs = 9'
            logo='document'
            logoSize='small'
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </Grid>
        <Grid item xs={6}>
          <SBCard
            style={{ height: '90%', width: '90%' }}
            header='Item with xs = 6 in container xs = 9'
            logo='document'
            logoSize='small'
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </Grid>
        <Grid item xs={6}>
          <SBCard
            style={{ height: '90%', width: '90%' }}
            header='Item with xs = 6 in container xs = 9'
            logo='document'
            logoSize='small'
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </Grid>
        <Grid item xs={6}>
          <SBCard
            style={{ height: '90%', width: '90%' }}
            header='Item with xs = 6 in container xs = 9'
            logo='document'
            logoSize='small'
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </Grid>
      </Grid>
      <Grid item xs={12} spacing={0}>
        <SBCard
          style={{ height: '80%', width: '96%' }}
          header='Item with xs = 12'
          elevation={3}
        >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </SBCard>
      </Grid>
    </Grid>
  )
}

export default GridOverview
