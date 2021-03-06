import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import DgradInfoFormPay from './DgrkLiquidationinfoFormPayment';
import { setDgrkRoute } from "../../../actions/data";

const mapDispatchToProps = {
  setDgrkRoute
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




class DgrkLiquidationPaymentFormAccountDetails extends Component {
 state =  {
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
    const { setDgrkRoute } = this.props;
    setDgrkRoute("taxDocument");
  }


	render() {
    const { classes } = this.props;
    const {  open  } = this.state;
		
		return (
      <Card
        title= " DGRK Document Liquidation Payment"
        subtitle="Please fill the below form"
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Benficiary Institution"
                name="accountNumber"
                autoComplete="Account No"
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
          
          <DgradInfoFormPay open={open} handleClose={this.handleClose}  />
        </form>

   
       
      </Card>
    );
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DgrkLiquidationPaymentFormAccountDetails));