import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { setBeneficiaryType } from "../../../actions/data";

const mapDispatchToProps = {
  setBeneficiaryType
};

const styles = theme => ({
  root: {
    padding: theme.spacing(1)
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
    width: 105,
    height: 105,
    border: "1px solid gray",
    borderRadius: 5
  }
});


function mapStateToProps(state) {
	return {
		dgi: state.dgi
	};
}



class SelfAndThirdPartyForm extends Component {

  handleConfirm = () => {
    const { setBeneficiaryType } = this.props;
    setBeneficiaryType("selfAndThirdPartyFormAccount");
  }

	render() {
		const { dgi, classes } = this.props;
		const checked = dgi.beneficiaryType === "Third Party" || dgi.beneficiaryType === "Self";
		return (
      <Card
        title={dgi.beneficiaryType + " DGI Payment"}
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
                label="benficiary Institution"
                name="accountNumber"
                autoComplete="Account Number"
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Declaration"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Tax Type"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Customer Amount"
                name="email"
                autoComplete="email"
              />
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
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Attach Liquidation Slip</Typography>
              <div className={classes.imgRoot}>
                <div className={classes.box}></div>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
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
              // onClick={handleClose}
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