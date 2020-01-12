import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'

const useStyles = makeStyles({
    
  btnWhite: {
    border: '1px solid white',
    borderRadius: '5px',
    paddingLeft: '30px',
    paddingRight: '30px',
    color: 'white',
    marginLeft: 'auto',
    display: 'block'
  }
})

export default function MyButton() {
  const classes = useStyles()
  return (
    <Button variant="outlined" className={classes.btnWhite} size="medium">
      Rules
    </Button>
  )
}