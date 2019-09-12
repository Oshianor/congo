import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomerCareComplete from "./CustomerInfoFormComplete";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const CustomerCare = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Card
      title="Customer Information for Payment"
      subtitle="Fill the following form to pay your DGDA payments"
      className={"MuiCardContent-inner"}
    >
      <form className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Year of Declearation"
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
              label="Account Number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Account Balance"
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
              label="Account Status"
              name="email"
              autoComplete="email"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleOpen}
              size="small"
              color="primary"
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
        <CustomerCareComplete open={open} handleClose={handleClose} />
      </form>
    </Card>
  );
};

export default CustomerCare;