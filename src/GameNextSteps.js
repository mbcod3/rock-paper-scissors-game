import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Weapon from './Weapon'
import HousePick from './HousePick'
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
    alignItems: 'center',
    maxWidth: '925px',
    margin: '2rem auto 0',
    '@media (max-width: 768px)': {
      maxWidth: '860px'
    }
  },
  picks: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '&:nth-child(1)': {
      marginRight: props => props ? 'auto' : '2.5em',
      '@media(max-width: 768px)': {
        marginRight: props => props ? '2.5em' : '2.5em'
      }
    },
    '&:nth-child(2)': {
      marginLeft: '2.5em',
    },
    '&:nth-child(3)': {
      marginLeft: props => props ? 'auto' : '2.5em',
      '@media(max-width: 768px)': {
        marginLeft: props => props ? '2.5em' : '2.5em'
      }
    }
  },
  pickTitle: {
    marginBottom: '3rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',

    '@media(max-width: 727px)': {
      order: '2',
      marginBottom: '2rem',
      marginTop: '2rem'
    }
  },
  btnPlay: {
    width: '100%',
    height: '50px',
    borderRadius: '8px',
    paddingBottom: '9px',
    backgroundColor: 'white',
    color: 'hsl(229, 25%, 31%)',
    fontSize: '19px',
    letterSpacing: '2px',
    marginTop: '1rem',
    boxShadow: '0 5px 3px rgb(0,0,0, 0.3)',
    zIndex: '200',
  },
  result: {
    marginTop: '2rem',
    '@media(max-width: 727px)': {
      margin: '2rem 3rem 0',
    },
  },
  last: {
    '@media(max-width: 727px)': {
      order: '3'
    }
  }
})
export default function GameNextSteps(props) {
  const {variant, img, borderColors, showingResults, playAgain, houseWeapon, won} = props
  
  const [showHouseWeapon, setShowHouseWeapon] = React.useState(false)
  const [showCall, setShowCall] = React.useState(false)
  const classes = useStyles(showHouseWeapon);

  React.useEffect(() => {
    setTimeout(function () {
      setShowHouseWeapon(true)
    }, 2000)

    
    setTimeout(function () {
      setShowCall(true)
    }, 2300)

  }, [])
  
  const clickHandler = () => {
    setShowHouseWeapon(false)
    playAgain()
  }
  return (
    <div className={classes.root} >
      <div className={classes.picks}>
        <Typography variant="h5" className={classes.pickTitle}>You Picked</Typography>
        <Weapon variant={variant} img={img} borderColors={borderColors} won={won === 1 ? won : 0} showingResults={showingResults} />
      </div>
      {showCall && 
      <Collapse in={showCall} className={classes.last}>
        <div className={classes.result}>
          <Typography variant="h2">{won === 1 ? 'YOU WON' : won === -1 ? 'YOU LOSE' : 'DRAW'}</Typography>
          <Button variant="contained" className={classes.btnPlay} onClick={clickHandler}>Play Again</Button>
        </div>
      </Collapse>}
      <div className={classes.picks}>
        <Typography variant="h5" className={classes.pickTitle}>The House Picked</Typography>
        <HousePick {...houseWeapon} won={won === -1 ? won : 0} showingResults={showingResults} showHouseWeapon={showHouseWeapon} />
      </div>
    </div>
  )
}
