import React from 'react'
import Switch from '@material-ui/core/Switch';
import { makeStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: '350px',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center'
  }
});

const MySwitch = withStyles({
  switchBase: {
    color: 'white',
    '&$checked': {
      color: 'hsl(230, 89%, 62%)',
    },
    '&$checked + $track': {
      backgroundColor: 'hsl(230, 89%, 85%)',
    },
  },
  checked: {},
  track: {backgroundColor: 'rgb(199,199,199)'},
})(Switch);

export default function ToggleType(props) {
  const classes = useStyles();
  const {gameType, setGameType} = props

  const handleChange = () => {
    gameType === 3 ? setGameType(5) : setGameType(3);
  }
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">Classic Game</Typography>
      <MySwitch
        onChange={handleChange}
        size="small"
        checked={gameType === 5}
      />
      <Typography variant="subtitle1">Advance Game</Typography>
    </div>
  )
}
