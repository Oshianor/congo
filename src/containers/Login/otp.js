import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "next/router";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import HeaderBasic from "../../../src/components/headers/headerBasic";
// import { config } from "../../../config"
// import axios from "axios";



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

 class SignInSide extends Component {

  state = {
    otp: "",
    err: "",
    msg: ""
  };

  handleLogin = async e => {
    e.preventDefault();
    const { otp } = this.state;
    const { router } = this.props;

    this.setState({
      err: "",
      msg: ""
    });

    if (otp == '') {
      this.setState({
        err: "otp",
        msg: "Invalid otp"
      });
      return;
    }

    router.push('/dashboard/in')
  }


  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  render () {
    const { classes } =  this.props;
    const {  msg, err, otp } = this.state;
    
    return (
      <Fade in={true}>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon className={classes.avatarIcon} />
            </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} 
            onSubmit={this.handleLogin}
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
              type="number"
              value={otp}
              onChange={this.onChange("otp")}
              id="email"
              label="Enter OTP"
              name="otp"
              autoComplete="otp"
              autoFocus
              error={err === "otp"}
              helperText={err === "otp" && msg}
            />
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Fade>
    );
  }
 }
export default withRouter(withStyles(useStyles)(SignInSide));