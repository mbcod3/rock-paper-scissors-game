import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(249,249,249)',
    borderRadius: '5px',
    color: 'hsl(229, 25%, 31%)',
    padding: '.5rem 3rem',
    textTransform: 'uppercase',
    '@media(max-width:670px)': {
      padding: '.3rem 2rem'
    },
    '& h6': {
      color: 'hsl(229, 64%, 46%)',
      marginBottom: '-12px',
      textAlign: 'center',
    },
  },
  scoreHeading: {
    fontSize: '3.75rem',
    fontWeight: '700',
    textAlign: 'center',
    '@media(max-width:670px)': {
      fontSize: '3.25rem',
    }
  }
})
export default function Score(props) {

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Score</Typography>
      <Typography variant="h2" className={classes.scoreHeading}>{props.score}</Typography>
    </div>
  )
}