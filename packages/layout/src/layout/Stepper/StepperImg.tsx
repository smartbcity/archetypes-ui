import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import clsx from 'clsx'

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      width: '100%',
      height: '100%',
      maxWidth: '351px',
      maxHeight: '411px',
      backgroundColor: '#fff',
      objectFit: 'contain'
    }
  })
)

interface StepperImgProps {
  className?: string
  img: string
  children: React.ReactNode
}

export const StepperImg = (props: StepperImgProps) => {
  const { img, children, className } = props
  const classes = useStyles()

  return (
    <Grid
      container
      alignItems='flex-start'
      spacing={0}
      className={clsx(className)}
    >
      <Grid item xs={12} sm={5} md={5} className='text-center'>
        <img src={img} alt='domicile-travail-logo' className={classes.img} />
      </Grid>
      <Hidden only='xs'>
        <Grid item sm={1}></Grid>
      </Hidden>
      <Grid item xs={12} sm={6} md={6}>
        {children}
      </Grid>
    </Grid>
  )
}
