import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tables from "./CustomerInfoFormTable";
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
          <div>
            <Tables />
          </div>
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