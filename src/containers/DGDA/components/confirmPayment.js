import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { setDgdaRoute } from "../../../actions/data";
import { connect } from 'react-redux';


const mapDispatchToProps = {
  setDgdaRoute
};

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 400
  },
  top: {
    minHeight: 250,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      minHeight: 150
    },
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    minHeight: 250,
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      minHeight: 150
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text: {
    lineHeight: 2.5
  },
  box: {
    width: 105,
    height: 105,
    border: "1px solid gray",
    borderRadius: 5
  },
  button: {
    // margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  imgRoot: {
    margin: "15px 0px",
    display: "flex",
    // justifyContent: "center",
    // alignItems: "baseline"
  }
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = (props) =>  {
  const { isOpen, setIsOpen, handleIsClose, setDgdaRoute } = props;

  const classes = useStyles();
  
 

  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
    setIsOpen( false )
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  const handleProcess = () => {
    setDgdaRoute("paymentForm");
  }

  return (
    <React.Fragment>
        <Dialog
        open={isOpen}
        className={classes.root}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleIsClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogContent className={classes.top}>
            <Typography className={classes.text}>Transaction</Typography>
            <Typography className={classes.text}>Ref: A1000234</Typography>
            {/* <Button
            variant="outlined"
            onClick={() => handleProcess()}
            size="small"
            color="primary"
            >
            Process Payment
            </Button> */}
        </DialogContent>
        <DialogContent className={classes.bottom}>
            <Typography>Attach Liquidation Slip</Typography>
            <div className={classes.imgRoot}>
            <div className={classes.box}></div>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button
                variant="contained"
                component="span"
                size="small"
                className={classes.button}
                >
                Upload
                </Button>
            </label>
            </div>
            <Button
            variant="contained"
            onClick={handleClickOpen}
            size="small"
            color="primary"
            >
            OK
            </Button>
        </DialogContent>
        </Dialog>
        <div>
            <Dialog
            open={modal}
            // onClose={}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{"Status"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                suceessful!!!!!!!!!!
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.buttons}>
            <Button onClick={handleModalClose} color="primary">
                Back
                </Button>

                <Button
                onClick={() => handleProcess()}
                color="primary">
                Proceed
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    </React.Fragment>
  );
}


export default connect(null, mapDispatchToProps)(AlertDialogSlide);
