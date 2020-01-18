import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './images/logo.svg'
import advLogo from './images/logo-bonus.svg'
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
    padding: prop => prop === 5 ? '1.7rem 2rem' : '2rem',
  }
})

export default function Header(props) {
  const {gameType, score} = props
  const classes = useStyles(gameType);
  return (
    <div className={classes.root}>
      <img src={gameType === 3 ? logo : advLogo} alt="logo" className="img-fluid"/>
        <Score score={score} />
    </div>
  )
}