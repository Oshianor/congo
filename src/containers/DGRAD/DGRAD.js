import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import DgradPaymentForm from "./components/DgradPaymentForm";
import DgradPaymentAccountForm from "./components/DgradPaymentFormAccountDetails";
import DoYouKnow from "../../components/DoYouKnow/DoYouKnow";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  dgrad: state.dgrad
});


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

const DGRAD = (props) => {
  const classes = useStyles();
  const { dgrad } = props;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
           {dgrad.routes === "paymentForm" ? ( 
             <DgradPaymentForm />
            ) : ( 
              dgrad.routes === "accountDetails" && <DgradPaymentAccountForm />)}
          </Grid>
          <Grid item xs={12} sm={5}>
            <DoYouKnow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(DGRAD);
