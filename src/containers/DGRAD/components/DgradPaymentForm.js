import React, { Component } from 'react';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from '@material-ui/core/InputAdornment';
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    border: "1px solid gray",
    borderRadius: 5
  },
  formControl: {
    minWidth: '100%', 
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
    zonePayment: '',
    documentImage: '',
    accountNumber: ''
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
      bank,
      zonePayment,
      accountNumber,
      documentImage
    } = this.state
		return (
      <Card
        title= " DGRAD Payment"
        subtitle="Fill the following form to pay your DGRAD payments"
        className={"MuiCardContent-inner"}
      >
        <form className={classes.root}>
          <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Zone de Paiement</InputLabel>
                <Select
                  value={zonePayment}
                  onChange={this.handleChange("zonePayment")}
                  input={
                    <OutlinedInput
                      labelWidth={130}
                      name="age"
                      id="outlined-age-simple"
                    />
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="male">Military Zone</MenuItem>
                  <MenuItem value="female">Police Zone</MenuItem>
                  <MenuItem value="others">Government Zone</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple">Document Type</InputLabel>
                <Select
                  value={documentType}
                  onChange={this.handleChange("documentType")}
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
                type="number"
                id="numereNote"
                label="Numere Note de Perception"
                name="numereNote"
                autoComplete="numereNote"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="taxType"
                label="Tax Type"
                name="taxType"
                autoComplete="taxType"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="amount"
                label="Tax Amount"
                name="amount"
                autoComplete="amount"
                InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
            <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-simple"> Customer Account </InputLabel>
                <Select
                  value={accountNumber}
                  onChange={this.handleChange("accountNumber")}
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
            <Grid item xs={12}>
              <Typography>Tax Document</Typography>
              <div className={classes.imgRoot}>
                <div className={classes.box}>
                {documentImage !== "" && (
                  <img src={documentImage} width="102" height="103" />
                )}
                </div>
                <input
                  accept="image/*"
                  className={classes.input}
                  onChange={this.handleImage('documentImage')}
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