import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/core/styles";
import DgrkLiqudationPay from './DgrkLiquidationinfoFormPayment';



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
  },
  formControl: {
    minWidth: 325, 
    // marginBottom: 10
  },
});




class DgrkLiquidationPaymentForm extends Component {
 state =  {
   open: false,
   documentType: ''
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



	render() {
    const { classes } = this.props;
    const {  open, documentType  } = this.state;
		
		return (
      <Card
        title= " DGRK Document Liquidation Payment"
        subtitle="Please fill the below form"
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Document Type</InputLabel>
                <Select
                  value={documentType}
                  onChange={this.handleChange("documentType")}
                  input={
                    <OutlinedInput
                      labelWidth={60}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="male">PDF</MenuItem>
                  <MenuItem value="female">WOrd</MenuItem>
                  <MenuItem value="others">PowerPoint</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="documentNumber"
                name="documentNumber"
                variant="outlined"
                required
                fullWidth
                id="documentNumber"
                label="Document Number"
                autoFocus
              />
            </Grid>
                   
          </Grid>
          <div className={classes.buttons}>
          <Button onClick={this.handleClose} variant="contained" size="medium">
              Cancel
            </Button>

            <Button onClick={this.handleOpen} variant="contained" size="medium" color="primary">
              Process
            </Button>
          </div>
          
          <DgrkLiqudationPay open={open} handleClose={this.handleClose}  />
        </form>

   
       
      </Card>
    );
	}
}

export default (withStyles(styles)(DgrkLiquidationPaymentForm));