import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import DgdaPaymentForm from "./components/DgdaPaymentForm";
import CustomerCare from './components/CustomerInfoForm';
import DoYouKnow from "../../components/DoYouKnow/DoYouKnow";
import Hidden from "@material-ui/core/Hidden";
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  dgda: state.dgda
});

// const mapDispatchToProps = {
  
// }



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

const DGDA = (props) => {
  const classes = useStyles();
  const { dgda } = props;
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            {dgda.route === "paymentForm" ? (
              <DgdaPaymentForm />
            ) : (
              dgda.route === "customerCare" && <CustomerCare />
            )}
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={5}>
              <DoYouKnow />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
};
export default connect(
  mapStateToProps
)(DGDA);

