import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3)

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
	render() {
		const { classes } = this.props;
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
            <Button className={classes.confirmButton} variant="contained" size="medium" color="primary">
              Confirm
            </Button>
          </div>
        </form>
      </Card>
    );
	}
}

export default withStyles(styles)(DgrkLiquidationPaymentTaxDocument);