import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from "@material-ui/core/styles";
import { setDgradRoute } from "../../../actions/data"
import DgradInfoFormPay from './DgradPaymentInfoFormComplete';



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

const mapDispatchToProps = {
  setDgradRoute 
}



class DgradPaymentFormAccountDetails extends Component {
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
    const { setDgradRoute } = this.props;
    setDgradRoute('paymentForm')
  }



	render() {
    const { classes } = this.props;
    const {  open  } = this.state;
		
		return (
      <Card
        title= " DGRAD Form Payment"
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
                name="beneficiaryInstitution"
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(DgradPaymentFormAccountDetails));