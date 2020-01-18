import React from 'react'
import { makeStyles } from '@material-ui/core'
import Weapon from './Weapon'
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '275px',
    height: '276px',
    '@media(max-width: 900px)': {
      width: '246px',
      height: '248px'
    },
    '@media(max-width: 768px)': {
      width: '194px',
      height: '196px'
    },
    '&::before': {
      position: 'absolute',
      content: "''",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '200px',
      height: '200px',
      backgroundColor: 'rgb(24,35,63)',
      borderRadius: '50%',
      animation: '$pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s',
      animationIterationCount: '2',
      '@media(max-width: 900px)': {
        width: '175px',
        height: '175px'
      },
      '@media(max-width: 768px)': {
        width: '125px',
        height: '125px'
      }
    }
  },
  '@keyframes pulse-dot': {
    '0%': {
      width: '65%',
      height: '65%'
    },
    '50%': {
      width: '82%',
      height: '82%'
    },
    '100%': {
      width: '65%',
      height: '65%'
    }
  },
  revealContainer: {
    transform: 'scale(0)',
    transition: 'transform .3s ease-in-out',
  },
  revealContainerShow: {
    transform: 'scale(1)'
  },
})

export default function HousePick(props) {

  const {variant, img, borderColors, won, showingResults, showHouseWeapon} = props
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className={clsx(classes.revealContainer, showHouseWeapon && classes.revealContainerShow)}>
        {showHouseWeapon && <Weapon variant={variant} img={img} borderColors={borderColors} won={won} showingResults={showingResults} />}
      </div>
    </div>
  )
}
