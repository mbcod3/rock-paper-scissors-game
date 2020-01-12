import React from 'react'
import Header from './Header'
import Game from './Game'
import Button from './Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  '@global': {
    body: {
      fontFamily: 'Barlow Semi Condensed, sans serif',
      color: 'white'
    },
    ".img-fluid": {
      maxWidth: '100%',
      height: 'auto',
      alignSelf: 'flex-start',
    },
  },  
  root: {
    background: 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
    padding: '1rem',
  },
})

export default function Page() {

  const [gameType, setGameType] = React.useState(3)

  const classes = useStyles()
  return (
    <main className={classes.root}>
      <Header />
      <Game type={gameType}/>
      <Button />
      {/* <Modal /> */}
    </main>
  )
}
