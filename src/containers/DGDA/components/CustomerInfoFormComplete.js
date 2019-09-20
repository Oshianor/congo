import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";



const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  root: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));

const CustomerCareComplete = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;

  return (
    <Collapse in={open} className={classes.root}>
      <Divider />
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="totaltax"
            label="Total Tax amount to be debited"
            name="totaltax"
            autoComplete="Total Tax"
            className={classes.textField}
          />
        </Grid>
      </Grid>

      <div className={classes.buttons}>
        <Button
          variant="outlined"
          size="medium"
          onClick={handleClose}
          color="default"
        >
          Reject
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Confirm
        </Button>
      </div>
    </Collapse>
  );
};

export default CustomerCareComplete;