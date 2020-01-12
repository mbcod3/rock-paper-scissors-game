import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import logo from './images/logo.svg'
import Score from './Score'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '700px',
    margin: '2rem auto',
    textAlign: 'left',
    border: '3px solid hsl(217, 16%, 45%)',
    borderRadius: '10px',
    padding: '2rem',
  },
  scoreboard: {
    backgroundColor: 'rgb(249,249,249)',
    borderRadius: '5px',
    color: 'hsl(229, 25%, 31%)',
    padding: '.5rem 3rem',
    textTransform: 'uppercase',
    '& h6': {
      color: 'hsl(229, 64%, 46%)',
      marginBottom: '-12px'
    }
  }
})

export default function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className="img-fluid"/>
      <div className={classes.scoreboard}>
        <Typography variant="subtitle1">Score</Typography>
        <Score />
      </div>
    </div>
  )
}