import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import DgrkLiquidationPaymentForm from "./components/DgrkLiquidationPaymentForm";
import DgrkLiquidationPaymentFormAccountDetails from "./components/DgrkLiquidationPaymentFormAccountDetails";
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

const DGRK = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            <DgrkLiquidationPaymentFormAccountDetails />
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

export default DGRK;
