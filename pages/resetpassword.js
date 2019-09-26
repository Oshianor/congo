import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import isEmail from "validator/lib/isEmail";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import HeaderBasic from "../src/components/headers/headerBasic";


const mapStateToProps = state => ({
  account: state.account
});


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

class ResetPassword extends Component {
    
    state = {
        otp: "",
        err: "",
        password: "",
        confirmPassword: ""
      };
    
      handleSubmit = async e => {
        e.preventDefault();
        const { password, confirmPassword } = this.state;
        const { router } = this.props;
    
        this.setState({
          err: "",
          msg: ""
        });

        if ( password === '') {
          this.setState({
              err: 'password',
              msg: 'password can not be empty'
            })
            return
          }
      
          if ( password !== confirmPassword) {
            this.setState({
              err: 'confirmPassword',
              msg: 'password does not match'
            })
            return
          }
          
        // router.push('/dashboard/in')
      }
    
    
      onChange = name => e => {
        this.setState({
          [name]: e.target.value
        });
      };
    
	render() {
    const { classes } = this.props;
    const { 
        err,
        msg,
        password,
        confirmPassword 
    } = this.state;
        
		return (
			<Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component="div" elevation={6} square>
          <HeaderBasic />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon className={classes.avatarIcon} />
            </Avatar>
          <Typography component="h1" variant="h5">
            Enter new password below 
          </Typography>
          <form className={classes.form} 
            onSubmit={this.handleSubmit}
            noValidate
            >
            {err === "others" && (
              <Paper className={classes.alert}>{msg}</Paper>
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={this.onChange("password")}
              id="password"
              label="New Password"
              name="password"
              autoComplete="password"
              autoFocus
              error={err === "password"}
              helperText={err === "password" && msg}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={confirmPassword}
              onChange={this.onChange("confirmPassword")}
              id="confirmPassword"
              label="Confirm New Password"
              name="confirmPassword"
              autoComplete="confirmPassword"
              autoFocus
              error={err === "confirmPassword"}
              helperText={err === "confirmPassword" && msg}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
        </Grid>
      </Grid>
		);
	}
}

export default withStyles(useStyles)(ResetPassword);