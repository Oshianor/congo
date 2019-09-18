import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import DgrkLiquidationPaymentForm from "./components/DgrkLiquidationPaymentForm";
import DgrkLiquidationPaymentTaxDocument from "./components/DgrkLiquidationPaymentTaxDocument";
import DgrkLiquidationPaymentFormAccountDetails from "./components/DgrkLiquidationPaymentFormAccountDetails";
import DoYouKnow from "../../components/DoYouKnow/DoYouKnow";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  dgrk: state.dgrk,
});

const DGRK = (props) => {
  const classes = useStyles();
  const { dgrk } = props;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            {dgrk.route === "paymentForm" ? (
              <DgrkLiquidationPaymentForm />
              ) : (
                dgrk.route === "taxDocument" && <DgrkLiquidationPaymentTaxDocument /> )}
            {dgrk.route === 'accountDetails' &&
              <DgrkLiquidationPaymentFormAccountDetails />
            }
          </Grid>
          <Grid item xs={12} sm={5}>
            <DoYouKnow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DGRK);
