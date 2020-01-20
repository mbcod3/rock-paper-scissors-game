import React from 'react';
import { makeStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import rules from './images/image-rules.svg'
import advancedRules from './images/image-rules-bonus.svg'
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingTop: '2rem',
    '@media(max-width:507px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(4),
    top: theme.spacing(3),
    color: theme.palette.grey[400],
    '@media(max-width:599px)': {
      top: theme.spacing(2)
    },
    '@media(max-width:507px)': {
      right: theme.spacing(1)
    }
  },
  boldTitle: {
    fontWeight: '700',
    color: 'hsl(229, 25%, 31%)'
  },
  btn: {
    letterSpacing: '3px',
    textTransform: 'lowercase',
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4" className={classes.boldTitle}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close fontSize="large"/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    paddingLeft: '3rem',
    paddingRight: '3rem',
    paddingBottom: '2rem',
    '@media(max-width:507px)': {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
}))(MuiDialogContent);


const useStyles = makeStyles({
  btnWhite: {
    border: '1px solid white',
    borderRadius: '7px',
    paddingLeft: '30px',
    paddingRight: '30px',
    color: 'white',
    marginLeft: 'auto',
    display: 'block',
    letterSpacing: '3px',
    '@media(max-width:768px)': {
      marginRight: props => props && 'auto',
      position: props => props && 'absolute',
      bottom: props => props && '30px',
      left: props => props && '50%',
      transform: props => props && 'translateX(-50%)',
    },
    '@media(max-width: 507px)': {
      marginRight: 'auto'
    }
  }
})


export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const {gameType, showingResults} = props

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles(showingResults);


  return (
    <div>
      <Button variant="outlined" className={classes.btnWhite} size="medium" onClick={handleClickOpen}>
        Rules
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="rules dialog" open={open} TransitionComponent={Transition} keepMounted>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          RULES
        </DialogTitle>
        <DialogContent >
          <img src={gameType === 3 ? rules : advancedRules} alt="game rules" className="img-fluid" />
        </DialogContent>
      </Dialog>
    </div>
  );
}