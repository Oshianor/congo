import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import List from "./components/list";
import { connect } from "react-redux";
import MultiplePartyForm from './components/multiplePartyForm';
import SelfAndThirdPartyForm from './components/selfAndThirdPartyForm';
import SelfAndThirdPartyFormAccountDetails from './components/selfAndThirdPartyFormAccountDetails';
import DidYouKnow from '../../components/DoYouKnow/DoYouKnow';
import MultiplePartyFormAccountDetails from './components/multiplePartyFormAccountDetails';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  
  }
}));


function mapStateToProps(state) {
  return {
    dgi: state.dgi
  };
}


const DGI = (props) => {
  const classes = useStyles();
  const { dgi } = props;
  return (
    <div className={classes.content}>
      <Grid container justify="center" align="center">
        <Grid item xs={12} sm={7}>
          {dgi.beneficiaryType == "" && <List />}
          {dgi.beneficiaryType === "Self" ||
          dgi.beneficiaryType === "Third Party" ? ( 
            <SelfAndThirdPartyForm />
             ) : ( dgi.beneficiaryType === "Multiple" && <MultiplePartyForm /> )}
          {dgi.beneficiaryType === 'selfAndThirdPartyFormAccount' && ( <SelfAndThirdPartyFormAccountDetails />)}
          {dgi.beneficiaryType === 'multiplePartyFormAccount' && ( <MultiplePartyFormAccountDetails />)}
        </Grid>
        <Grid item xs={12} sm={5}>
          <DidYouKnow />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(
  mapStateToProps,
)(DGI);