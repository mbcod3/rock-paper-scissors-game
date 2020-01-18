import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    borderRadius: '50%',
    padding: props => props.gameType ? '21px' : '32px',
    paddingBottom: props => props.gameType ? '24px' : '34px',
    alignSelf: 'flex-start',
    backgroundImage: props => `linear-gradient(to bottom, ${props.borderColors[0]}, ${props.borderColors[1]})`,
    boxShadow: 'inset 0px -7px 0 1px rgb(0,0,0, .2)',
    cursor: props => !props.showingResults && 'pointer',
    '@media (max-width: 900px)': {
      padding: props => !props.gameType && '28px',
      paddingBottom: props => !props.gameType && '30px'
    },
    '@media (max-width: 768px)': {
      padding: props => props.gameType ? '18px': '22px',
      paddingBottom: props => props.gameType ? '20px' : '24px'
    },
    '&:nth-child(1)': {
      order: props => props.gameType === 5 && '3',
      marginTop: props => props.gameType === 5 && '8.2rem'
    },
    '&:nth-child(2)': {
      order: props => props.gameType === 5 && '2'
    },
    '&:nth-child(3)': {
      margin: props => props.gameType === 3 && '2rem auto 0 auto',
      alignSelf: props => props.gameType === 5 && 'flex-start',
      order: props => props.gameType === 5 && '5',
      marginTop: props => props.gameType === 5 && '2.5rem',
      marginRight: props => props.gameType === 5 && '4rem'
    },
    '&:nth-child(4)': {
      order: '4',
      marginTop: '2.5rem',
      marginLeft: '4rem'
    },
    '&:nth-child(5)': {
      order: '1',
      marginTop: '8.2rem'
    },  
  },
  rootLights: { 
    '&::before': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: "''",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'hsla(0,0%,100%,.03)',
      zIndex: '-1',
      borderRadius: '50%',
      opacity: '0',
      transition: 'all .4s ease-in-out .15s'
    },
    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: "''",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'hsla(0,0%,100%,.02)',
      zIndex: '-1',
      borderRadius: '50%',
      opacity: '0',
      transition: 'all .4s ease-in-out .3s'
    }
  },
  rootLightsShow: {
    '&::before': {
      width: '200%',
      height: '200%',
      opacity: '1',
      '@media(max-width:768px)': {
        width: '165%',
        height: '165%'
      }
    },
    '&::after': {
      width: '250%',
      height: '250%',
      opacity: '1',
      '@media(max-width:768px)': {
        width: '205%',
        height: '205%'
      }
    }
  },
  wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: props => props.gameType === 5 ? '112px' : props.gameType === 3 ? '135px' : '210px',
    height: props => props.gameType === 5 ? '112px' : props.gameType === 3 ? '135px' : '210px',
    boxShadow: 'inset 0px 10px 0 -1px rgb(0,0,0, .1)',
    borderRadius: '50%',
    background: 'white',
    margin: ' 0 auto',
    '@media (max-width: 900px)': {
      width: props => !props.gameType && '190px',
      height: props => !props.gameType && '190px'
    },
    '@media (max-width: 768px)': {
      width: props => props.gameType === 5 ? '100px' : props.gameType === 3 ? '115px' : '150px',
      height: props => props.gameType === 5 ? '100px' : props.gameType === 3 ? '115px' : '150px',
    }
  },
  wrapLight: {
    '&::before': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      content: "''",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'hsla(0,0%,100%,.04)',
      zIndex: '-1',
      borderRadius: '50%',
      opacity: '0',
      transition: 'all .4s ease-in-out .08s'
    }
  },
  wrapLightShow: {
    '&::before': {
      width: '150%',
      height: '150%',
      opacity: '1',
      '@media(max-width:768px)': {
        width: '130%',
        height: '130%'
      }
    }
  },
  iconSize: {
    width: props => props.gameType === 5 ? 'normal' : props.gameType === 3 ? '46%' : '48%',
    '@media (max-width: 900px)': {
      width: props => !props.gameType && '42%'
    },
    '@media (max-width: 768px)': {
      width: props => props.gameType === 5 ? '42%' : props.gameType === 3 ? '40%' : '38%'
    }
  }
})
export default function Weapon(props) {
  const {variant, img, clickHandler, won, showingResults} = props
  const classes = useStyles(props)

  const handleClick = () => {
    clickHandler(props)
  }
  return (
    <div className={clsx(classes.root, showingResults && classes.rootLights, won && classes.rootLightsShow)} onClick={!showingResults ? handleClick : undefined}>
      <div className={clsx(classes.wrap, showingResults && classes.wrapLight, won && classes.wrapLightShow)}>
        <img src={`${img[variant]}`} alt={variant} className={classes.iconSize} />
      </div>
    </div>
  )
}