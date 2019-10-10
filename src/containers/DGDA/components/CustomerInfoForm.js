import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tables from "./CustomerInfoFormTable";
import CustomerCareComplete from "./CustomerInfoFormComplete";
import { setDgdaRoute } from "../../../actions/data";
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const mapDispatchToProps = {
  setDgdaRoute
};


const CustomerCare = (props) => {
  const { setDgdaRoute } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [ modal, modalVisible ] = React.useState(false);

  const handleModalClose = () => {
    modalVisible( false );
  };

  function handleModalOpen() {
    modalVisible( false );

  }

  function handleOpen() {
    setOpen(true);
    modalVisible( true );

  }

  const handleBack = () => {
    setDgdaRoute("paymentForm");
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Card
      title="Customer Information for Payment"
      subtitle="Fill the following form to pay your DGDA payments"
      className={"MuiCardContent-inner"}
    >
      <form className={classes.root}>
        <Grid container spacing={2}>
          <div>
            <Tables />
          </div>
          <Grid item xs={12}>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                size="small"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={handleOpen}
                size="small"
                color="primary"
              >
                Proceed
              </Button>
            </div>
          </Grid>
        </Grid>
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
                Unsuccessful or Successful with a Reason (e.g Insufficient Funds )
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.buttons}>
            <Button onClick={handleModalClose} color="primary">
                Back
              </Button>

              <Button
              onClick={handleModalOpen}
              color="primary">
                Proceed
              </Button>
            </DialogActions>
          </Dialog>
        </div>

        <CustomerCareComplete open={open} handleClose={handleClose} />
      </form>
    </Card>
  );
};

export default connect(null, mapDispatchToProps)(CustomerCare);