import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { setDgrkRoute } from "../../../actions/data";

const mapDispatchToProps = {
  setDgrkRoute
};



const styles = theme => ({
  root: {
    padding: 10

  },
  buttons: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    marginTop: theme.spacing(1)
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
  tax: {
    marginBottom: theme.spacing(2)
  },
  confirmButton: {
    marginRight: theme.spacing(2)
  }
});




class DgrkLiquidationPaymentTaxDocument extends Component {
  state = {
    taxDocumentImage: ''
  }

  handleProcess = () => {
    const { setDgrkRoute } = this.props;
    setDgrkRoute("accountDetails");
  }

  
  handleBack = () => {
    const { setDgrkRoute } = this.props;
    setDgrkRoute("paymentForm");
  }

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
    const { classes } = this.props;
    const { 
      taxDocumentImage 
    } = this.state
		return (
      <Card
        title={" DGRk Document Liquidation Payment"}
        subtitle="Please fill the below form"
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" className={classes.tax}>Tax Document</Typography>
              <div className={classes.imgRoot}>
                <div className={classes.box}>
                  { taxDocumentImage !== "" && (
                    <img src={taxDocumentImage} width='102' height='102' />
                  )}
                </div>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  onChange={this.handleImage('taxDocumentImage')}
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
              onClick={this.handleProcess}
              className={classes.confirmButton} variant="contained" size="medium" color="primary">
              Confirm
            </Button>
          </div>
        </form>
      </Card>
    );
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DgrkLiquidationPaymentTaxDocument));