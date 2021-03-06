import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import Dialog from '@material-ui/core/Dialog';
import InputAdornment from '@material-ui/core/InputAdornment';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import { setDgrkRoute } from "../../../actions/data";
import { connect } from "react-redux";



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
    width: '100%', 
    marginTop: theme.spacing(2)

    // marginBottom: 10
  },
}));

const mapDispatchToProps = {
  setDgrkRoute
};

const DgrkPaymentInfoFormComplete = (props) => {
  const classes = useStyles();
  const { open, handleClose, setDgrkRoute } = props;

  const [ value, setValue ] = React.useState({
    documentType: "",
    taxType: '',
    amount: '',
    accountNumber: ''
  });

  const handleConfirm = () => {
    setDgrkRoute("taxDocument");
  }

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };



  return (
    <Collapse in={open} className={classes.root}>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple">Tax Type</InputLabel>
              <Select
                value={value.taxType}
                onChange={handleChange("taxType")}
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
                <MenuItem value="Tax one">Tax one</MenuItem>
                <MenuItem value="Tax Two">Tax Two</MenuItem>
                <MenuItem value="Tax Three">Tax Three </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            value={value.amount}
            onChange={handleChange("amount")}
            label="Amount "
            name="amount"
            autoComplete="Amount"
            InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            className={classes.textField}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple">Select Bank</InputLabel>
              <Select
                value={value.documentType}
                onChange={handleChange("documentType")}
                input={
                  <OutlinedInput
                    labelWidth={80}
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
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Customer Account</InputLabel>
                <Select
                  value={value.accountNumber}
                  onChange={handleChange("accountNumber")}
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
        <Button onClick={() => handleConfirm()} variant="contained" size="medium" color="primary">
          Process
        </Button>
      </div>

      
    </Collapse>
    
  );
};

export default connect(
  null,
  mapDispatchToProps
)(DgrkPaymentInfoFormComplete);