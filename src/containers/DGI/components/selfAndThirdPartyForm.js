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
import MenuItem from '@material-ui/core/MenuItem';
import Router from 'next/router';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import { setBeneficiaryType } from "../../../actions/data";

const mapDispatchToProps = {
  setBeneficiaryType
};

const styles = theme => ({
  root: {
    padding: 10
  },
  buttons: {
    marginTop: theme.spacing(2),
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
  formControl: {
    width: '100%',
    // minWidth: 120
  },
});


function mapStateToProps(state) {
	return {
		dgi: state.dgi
	};
}



class SelfAndThirdPartyForm extends Component {

  state = {
    beneficiaryIstitution: '',
    typeOfDeclaration: '',
    taxType: '',
    liquidationSlipImage: '',
    accountNumber: '',
  }

  handleConfirm = () => {
    const { setBeneficiaryType } = this.props;
    setBeneficiaryType("selfAndThirdPartyFormAccount");
  }

  handleBack = () => {
    const { setBeneficiaryType } = this.props
    setBeneficiaryType("");
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  };
  
  handleImage = value => event => {
    let file = event.target.files[0];
    let reader = new FileReader();
    let self = this;
    reader.readAsDataURL(file);
    reader.onload = function() {
      self.setState({
        [value]: reader.result
      });
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  };

	render() {
    const { dgi, classes } = this.props;
    const { 
      beneficiaryIstitution,
      typeOfDeclaration,
      taxType,
      liquidationSlipImage,
      accountNumber
    } = this.state
		const checked = dgi.beneficiaryType === "Third Party" || dgi.beneficiaryType === "Self";
		return (
      <Card
        title={dgi.beneficiaryType + " DGI Payment"}
        subtitle="Please fill the below form"
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple">Benficiary Institution</InputLabel>
              <Select
                value={beneficiaryIstitution}
                onChange={this.handleChange("beneficiaryIstitution")}
                input={
                  <OutlinedInput
                    labelWidth={100}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">warri HQ</MenuItem>
                <MenuItem value="female">delta branch</MenuItem>
                <MenuItem value="others">PowerPoint Branch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple"> Type of Declaration </InputLabel>
              <Select
                value={typeOfDeclaration}
                onChange={this.handleChange("typeOfDeclaration")}
                input={
                  <OutlinedInput
                    labelWidth={100}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">warri HQ</MenuItem>
                <MenuItem value="female">delta branch</MenuItem>
                <MenuItem value="others">PowerPoint Branch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
            {/* <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple">Tax type</InputLabel>
              <Select
                value={taxType}
                onChange={this.handleChange("taxType")}
                input={
                  <OutlinedInput
                    labelWidth={100}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">warri HQ</MenuItem>
                <MenuItem value="female">delta branch</MenuItem>
                <MenuItem value="others">PowerPoint Branch</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Account Number</InputLabel>
                <Select
                  value={accountNumber}
                  onChange={this.handleChange("accountNumber")}
                  input={
                    <OutlinedInput
                      labelWidth={120}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="0123456789 - current">0123456789 - current</MenuItem>
                  <MenuItem value="0123456789 - savings">0123456789 - savings</MenuItem>
                  <MenuItem value="0123456789 - corporate">0123456789 - corporate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="residentialAddress"
                label="Tax Amount"
                name="residentialAddress"
                autoComplete="Residential Address"
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Attach Liquidation Slip</Typography>
              <div className={classes.imgRoot}>
                <div className={classes.box}>
                {liquidationSlipImage !== "" && (
                  <img src={liquidationSlipImage} width="102" height="103" />
                )}
                </div>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={this.handleImage('liquidationSlipImage')}
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    size="small"
                    className={classes.button}
                  >
                    Upload
                  </Button>
                </label>
              </div>
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
            <Button 
              onClick={this.handleConfirm}
              variant="contained" size="medium" color="primary">
              Confirm
            </Button>
          </div>
        </form>
      </Card>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SelfAndThirdPartyForm));