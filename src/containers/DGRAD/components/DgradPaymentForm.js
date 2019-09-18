import React, { Component } from 'react';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { setDgradRoute } from "../../../actions/data"


const styles = theme => ({
  root: {
    padding: theme.spacing(1)
  },
  buttons: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
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
    minWidth: 300, 
    // marginBottom: 10
  },
});


const mapDispatchToProps = {
  setDgradRoute 
}


class DGRAD extends Component {
  state = {
    documentType: '',
    taxType: '',
    bank: '',
  }


  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
  };

  handleProceed = () => {
    const { setDgradRoute } = this.props;
    setDgradRoute('accountDetails')
  }


	render() {
    const { classes } = this.props;
    const {
      documentType,
      taxType,
      bank
    } = this.state
		return (
      <Card
        title= " DGRAD Payment"
        subtitle="Fill the following form to pay your DGRAD payments"
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
                label="Zone de Paiement"
                name="accountNumber"
                autoComplete="Account Number"
                className={classes.textField}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Document Type</InputLabel>
                <Select
                  value={documentType}
                  onChange={this.handleChange("documentType")}
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
                  <MenuItem value="male">PDF</MenuItem>
                  <MenuItem value="female">WOrd</MenuItem>
                  <MenuItem value="others">PowerPoint</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="numereNote"
                label="Numere Note"
                name="numereNote"
                autoComplete="numereNote"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Tax type</InputLabel>
                <Select
                  value={taxType}
                  onChange={this.handleChange("taxType")}
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
                  <MenuItem value="male">Tax 1</MenuItem>
                  <MenuItem value="female">Tax 2</MenuItem>
                  <MenuItem value="others">Tax 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Amount"
                label="Amount"
                name="Amount"
                autoComplete="amount"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Bank</InputLabel>
                <Select
                  value={bank}
                  onChange={this.handleChange("bank")}
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
                  <MenuItem value="male">Access (Diamond) bank</MenuItem>
                  <MenuItem value="female">GT BAnk</MenuItem>
                  <MenuItem value="others">Providus Bank</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="account"
                label="Account No."
                name="account"
                autoComplete="account"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Tax Document</Typography>
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
              onClick={this.handleProceed}
              variant="contained" size="medium" color="primary">
              Proceed
            </Button>
          </div>
        </form>
      </Card>
    );
	}
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DGRAD));