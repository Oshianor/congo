import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(4) 
  },
  root: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  formControl: {
    minWidth: 325, 
    // marginBottom: 10
  },
}));

const DgrkPaymentInfoFormComplete = (props) => {
  const classes = useStyles();
  const { open, handleClose } = props;

  const [ modal, modalVisible ] = React.useState(false);
  const [ value, setValue ] = React.useState({
    documentType: "",
  });


  const handleChange = name => event => {
    setValue({ ...values, [name]: event.target.value });
  };

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  
  const handleModalOk = () => {
    const { router } = props;
    router.push("/dashboard/dgrk");

  }


  return (
    <Collapse in={open} className={classes.root}>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Tax type"
            name="taxType"
            autoComplete="Amount"
            className={classes.textField}
          />
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Amount "
            name="amount"
            autoComplete="Amount"
            className={classes.textField}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Document Type</InputLabel>
                <Select
                  value={value.documentType}
                  onChange={handleChange("documentType")}
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
                  <MenuItem value="male">Access (Diamond) Bank</MenuItem>
                  <MenuItem value="female">Gt Bank</MenuItem>
                  <MenuItem value="others">Providous Bank</MenuItem>
                </Select>
              </FormControl>
            </Grid>
      </Grid>

      <div className={classes.buttons}>
        <Button
          variant="outlined"
          size="medium"
          onClick={handleClose}
          color="default"
        >
          Back
        </Button>
        <Button onClick={handleClickOpen} variant="contained" size="medium" color="primary">
          Process
        </Button>
      </div>

      
    </Collapse>
    
  );
};

export default DgrkPaymentInfoFormComplete;