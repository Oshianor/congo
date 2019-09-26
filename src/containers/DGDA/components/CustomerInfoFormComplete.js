import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import InputAdornment from '@material-ui/core/InputAdornment';
import ConfirmPayment from "./confirmPayment";



const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  root: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const CustomerCareComplete = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;

  const [ isOpen, setIsOpen ] = React.useState(false)

  const handleIsOpen = () => {
    setIsOpen(true);
  }

  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  const handleIsClose = () => {
    setIsOpen(false);
  }

  return (
    <React.Fragment>
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
            Reject
          </Button>
          <Button 
            onClick={handleIsOpen}
            variant="contained" 
            size="medium" 
            color="secondary">
            Confirm
          </Button>
        </div>
      </Collapse>
     

      <ConfirmPayment isOpen={isOpen} setIsOpen={setIsOpen} handleIsClose={handleIsClose}/>
    </React.Fragment>
  );
};

export default CustomerCareComplete;