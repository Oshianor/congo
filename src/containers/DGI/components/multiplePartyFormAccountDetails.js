import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from '@material-ui/core/InputAdornment';
import SelfAndThirdPartyFormPay from './selfAndThirdPartyInfoFormComplete';
import { setBeneficiaryType } from "../../../actions/data";

const mapDispatchToProps = {
  setBeneficiaryType
};


const styles = theme => ({
  root: {
    padding: theme.spacing(1)
  },
  buttons: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    marginTop: theme.spacing(9),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    display: "none"
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    border: "1px solid gray",
    borderRadius: 5
  },
  divide: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }
});




class MultipleFormAccountDetails extends Component {
 state =  {
   modalVisible: false,
   open: false
  };

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  };


  handleOpen = () => {
    this.setState({
      open: true
    })
  }
  
  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleBack = () => {
    const { setBeneficiaryType } = this.props;
    setBeneficiaryType('Multiple')
  }



	render() {
    const { classes } = this.props;
    const { modalVisible, open  } = this.state;
		
		return (
      <Card
        title= " DGI Form Account Payment"
        subtitle="Please fill the below form"
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="benficiaryInstitution"
                label="Benficiary Institution"
                name="benficiaryInstitution"
                autoComplete="Benficiary Institution"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="accountStatus"
                name="accountStatus"
                variant="outlined"
                required
                fullWidth
                id="accountStatus"
                label="Account Status"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Available Balance"
                name="availableBalance"
                autoComplete="lname"
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              />
            </Grid>             
          </Grid>

          <div className={classes.divide}>
            <Divider />
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="benficiaryInstitution"
                label="Benficiary Institution"
                name="benficiaryInstitution"
                autoComplete="Benficiary Institution"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="accountStatus"
                name="accountStatus"
                variant="outlined"
                required
                fullWidth
                id="accountStatus"
                label="Account Status"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Available Balance"
                name="availableBalance"
                autoComplete="lname"
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              />
            </Grid>             
          </Grid>

          <div className={classes.divide}>
            <Divider />
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="benficiaryInstitution"
                label="Benficiary Institution"
                name="benficiaryInstitution"
                autoComplete="Benficiary Institution"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="accountStatus"
                name="accountStatus"
                variant="outlined"
                required
                fullWidth
                id="accountStatus"
                label="Account Status"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Available Balance"
                name="availableBalance"
                autoComplete="lname"
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              />
            </Grid>             
          </Grid>

          <div className={classes.divide}>
            <Divider />
          </div>

          <div className={classes.buttons}>
            <Button
              variant="outlined"
              size="medium"
              onClick={this.handleBack}
              color="default"
            >
              Back
            </Button>
            <Button onClick={this.handleOpen} variant="contained" size="medium" color="primary">
              Process Payment
            </Button>
          </div>
          
          <SelfAndThirdPartyFormPay open={open} handleClose={this.handleClose}  />
        </form>

   
       
      </Card>
    );
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(MultipleFormAccountDetails));