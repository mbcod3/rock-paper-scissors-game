import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    borderRadius: '50%',
    padding: '21px',
    backgroundImage: colors => `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`,
    boxShadow: 'inset 0px -7px 0 1px rgb(0,0,0, .2)',
    '&:nth-child(3)': {
      margin: '2rem auto 0 auto'
    }
  },
  wrap: {
    padding: '2rem 2.2rem',
    boxShadow: 'inset 0px 10px 0 -1px rgb(0,0,0, .1)',
    borderRadius: '50%',
    background: 'white'
  }
})
export default function Weapon(props) {
  const {variant, borderColors, img} = props
  const classes = useStyles(borderColors)
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <img src={`${img[variant]}`} alt={variant}/>
      </div>
    </div>
  )
}