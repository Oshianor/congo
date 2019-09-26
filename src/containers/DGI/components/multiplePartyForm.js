import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MultiplePartyFormAdd from './multiplePartyFormAdd';
import { setBeneficiaryType } from "../../../actions/data"

const mapDispatchToProps = {
  setBeneficiaryType
};


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 105,
    height: 105,
    border: "1px solid gray",
    borderRadius: 5
  },
  formControl: {
    width: '100%', 
    // marginBottom: 10
  },
  fab: {
    marginBottom: theme.spacing(1),
    height: 30,
    width: 30
  },
  fabAdd: {
    display: 'flex',
    justifyContent: 'flex-end',

  },
 
});



function mapStateToProps(state) {
	return {
		dgi: state.dgi
	};
}


class MultiplePartyForm extends Component {

  state = {
    beneficiaryInstitution: '',
    total: '',
    taxType: '',
    multiple: [MultiplePartyFormAdd]
  }

  handleConfirms= () => {
    const { setBeneficiaryType } = this.props;
     setBeneficiaryType("multiplePartyFormAccount");
  }

  handleChange = value => event => {
      this.setState({
        [value]: event.target.value
      });
  };

  handleBack =() => {
    const { setBeneficiaryType } = this.props
    setBeneficiaryType("");
  }

  handleAddTextfield = () => {
    const { multiple }  = this.state;

    if (multiple.length !== 4) {
      var multiples  = this.state.multiple.push(MultiplePartyFormAdd)
      this.setState({
        multiples
      });
    }
    return 
  }


  handleDelete = (index) => {
    const { multiple }  = this.state;
    
    console.log("index", index);

    if (multiple.length >= 2 ) {
      multiple.splice(index, 1)
      this.setState({
        multiple
      })
    }
  }

  


	render() {
    const { dgi, classes } = this.props;
    const checked = dgi.beneficiaryType === "Multiple";

    const {
      beneficiaryInstitution,
      total,
      taxType,
      multiple
    } = this.state


    // render the component
    const data = multiple.map((Element, index) => { return <Element key={index} index={index} 
     multipleLength ={multiple.length} 
     handleDelete = {this.handleDelete} />
   })

    
		return (
      <Card
        title={dgi.beneficiaryType + " DGI Payment"}
        subtitle="Please fill the below form"
      >
        <form className={classes.form}>
          <div className={classes.fabAdd}>
            <Tooltip title="Add" aria-label="add">
              <Fab 
              onClick={this.handleAddTextfield}
              color="primary" aria-label="add" className={classes.fab}>
                <AddIcon  className={classes.add}/>
              </Fab>
            </Tooltip>
          </div>
          <div className={classes.inputs}>
            {data}

          </div>
          <div className={classes.buttons}>
            <Button 
              onClick= {this.handleBack}
              variant="contained" size="medium" color="default">
              Back
            </Button>
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