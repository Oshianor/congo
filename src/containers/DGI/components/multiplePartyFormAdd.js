import React, { Component } from 'react';
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
  form: {
    // marginLeft: 5
    padding: 10
  },
  buttons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
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
  formControl: {
    width: '100%', 
    // marginBottom: 10
  },

});




class MultiplePartyFormAdd extends Component {

  state = {
    beneficiaryInstitution: '',
    total: '',
    taxType: '',
    amount: ''
  }


  handleChange = value => event => {
      this.setState({
        [value]: event.target.value
      });
  };


	render() {

    const { classes, index, multipleLength, handleDelete } = this.props;

    console.log('this.props', this.props);

    const {
      beneficiaryInstitution,
      total,
      amount,
      taxType
      
    } = this.state
		return (

      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-simple">Beneficiary Institution</InputLabel>
            <Select
                value={beneficiaryInstitution}
                onChange={this.handleChange("beneficiaryInstitution")}
                input={
                <OutlinedInput
                    labelWidth={160}
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

          <Grid item xs={12} sm={5}>
            <TextField
              id="outlined-adornment-amount"
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              label="Amount"
              value={amount}
              onChange={this.handleChange('amount')}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid> 
          { multipleLength >= 2 && (
          <Grid item xs={12} sm={1}>
              <Tooltip title="Delete field">
                  <IconButton 
                      onClick = {() => handleDelete(index)}
                      aria-label="delete">
                      <DeleteIcon />
                  </IconButton>
              </Tooltip> 
          </Grid>  
          )}
                  
        </Grid>
      </form>
    );
	}
}

export default withStyles(styles)(MultiplePartyFormAdd);