import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import DgdaPaymentForm from "./components/DgdaPaymentForm";
import CustomerCare from './components/CustomerInfoForm';
import DoYouKnow from "../../components/DoYouKnow/DoYouKnow";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
}));

const DGDA = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <DgdaPaymentForm />
            {/* <CustomerCare /> */}
          </Grid>
          <Grid item xs={12} sm={5}>
            <DoYouKnow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DGDA;
