import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import InputAdornment from '@material-ui/core/InputAdornment';
import {withRouter} from "next/router";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(5)
  },
  root: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const DgrkLiquidationinfoFormPayment = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;

  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  
  const handleModalOk = () => {
    const { router } = props;
    router.push("/dashboard/dgrk");

  }


  return (
    <Collapse in={open} className={classes.root}>
      <Divider />
      <Grid container spacing={2} justify="center">
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="principal"
              label="Principal amount to be debited"
              name="principal"
              autoComplete="principal"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="vat"
              label="VAT amount to be debited"
              name="vat"
              autoComplete="vat"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="cot"
              label="COT amount to be debited"
              name="cot"
              autoComplete="cot Tax"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              className={classes.textField}
            />
          </Grid>
        </Grid>

      <div className={classes.buttons}>
        <Button
          variant="outlined"
          size="medium"
          onClick={handleClose}
          color="default"
        >
          Cancel
        </Button>
        <Button onClick={handleClickOpen} variant="contained" size="medium" color="primary">
          Confirm
        </Button>
      </div>

      <div>
        <Dialog
          open={modal}
          onClose={handleModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Status"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to Proceed with Payment?  
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.buttons}>
          <Button onClick={handleModalClose} color="primary">
              Cancel
            </Button>
            
            <Button onClick={handleModalOk} color="primary">
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    </Collapse>
    
  );
};

export default withRouter(DgrkLiquidationinfoFormPayment);