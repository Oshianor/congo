import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import Add from "@material-ui/icons/Add";
import { setBeneficiaryType } from "../../../actions/data"

const mapDispatchToProps = {
  setBeneficiaryType
};


const styles = theme => ({
  form: {
    marginLeft: 5
  },
  buttons: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
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



function mapStateToProps(state) {
	return {
		dgi: state.dgi
	};
}


class MultiplePartyForm extends Component {

  state = {
    documentType: '',
  
  }

  handleConfirms= () => {
    const { setBeneficiaryType } = this.props;
     setBeneficiaryType("selfAndThirdPartyFormAccount");
  }

  handleChange = value => event => {
      this.setState({
        [value]: event.target.value
      });
  };


	render() {
    const { dgi, classes } = this.props;
    const checked = dgi.beneficiaryType === "Multiple";

    const {
      documentType,
      
    } = this.state
		return (
      <Card
        title={dgi.beneficiaryType + " DGI Payment"}
        subtitle="Please fill the below form"
      >
        <form className={classes.form}>
          <Grid container>
           
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
           
          </Grid>
          
          <div style={{marginTop: 15}}>
          <TextField
            variant="outlined"
            required
            id="total"
            label="Total"
            name="total"
            disabled
            autoComplete="Total"
          />
          </div>
                  
          <div style={{marginTop: 15}}>
          <Button
              variant="outlined"
              size="medium"
              // onClick={handleClose}
              color="primary"
            >
              Add
              <Add />
            </Button>
            </div>


          <div className={classes.buttons}>
            <Button 
              onClick= {this.handleConfirms}
              variant="contained" size="medium" color="primary">
              Confirm
            </Button>
          </div>
        </form>
      </Card>
    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MultiplePartyForm));