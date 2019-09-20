import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "next/router";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import HeaderBasic from "../../components/headers/headerBasic";
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { setAccountRoute} from "../../actions/data";


const useStyles = theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url('/static/images/2760426.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#014086"
  },
  avatarIcon: {
    color: "#f98e46"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});


const mapDispatchToProps = {
  setAccountRoute 
}

 class SignInSide extends Component {

  state = {
    email: "",
    password: "",
    err: "",
    msg: "",
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { router, setAccountRoute } = this.props;
    setAccountRoute('enterOtp')

    this.setState({
      err: "",
      msg: ""
    });

    if (!isEmail(email)) {
      this.setState({
        err: "email",
        msg: "Invalid Email"
      });
      return;
    }

    if (password === "") {
      this.setState({
        err: "pass",
        msg: "Paasword can't be empty"
      });
      return;
    }

  }

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  render () {
    const { classes } =  this.props;
    const {  msg, err, email, password } = this.state;
    
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component="div" elevation={6} square>
          <HeaderBasic />
          <div className={classes.paper}>
            
          </div>
        </Grid>
      </Grid>
    );
  }
 }
export default connect(null, mapDispatchToProps)(withStyles(useStyles)(SignInSide));