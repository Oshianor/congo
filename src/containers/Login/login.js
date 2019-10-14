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
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';
import { connect } from "react-redux";
import isEmail from "validator/lib/isEmail";
import { setAccountRoute } from "../../actions/data";

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
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '75%',
    marginTop: 7,
    marginLeft: 7,
  }
});

const mapDispatchToProps = {
  setAccountRoute
};

class SignInSide extends Component {
  constructor() {
    super();
    
    this.timer = null;

    this.state = {
      email: "",
      password: "",
      err: "",
      msg: "",
      isLoading: false
    };
  }




  componentDidUnMount() {
    clearTimeout(this.timer);
  }

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { router, setAccountRoute } = this.props;


    this.setState({
      isLoading: true
    })


    this.timer = setTimeout(() => {
      this.setState({
        isLoading: false
      })
      setAccountRoute("enterOtp");
    }, 4000)


    

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

   
      
  };



  // handleButtonClick = () => {
   
  // };

  onChange = name => e => {
    this.setState({
      [name]: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { msg, err, email, password, isLoading } = this.state;

    return (
      <Fade in={true} >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon className={classes.avatarIcon} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleLogin} noValidate>
            {err === "others" && <Paper className={classes.alert}>{msg}</Paper>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={this.onChange("email")}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={err === "email"}
              helperText={err === "email" && msg}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={this.onChange("password")}
              name="password"
              label="Password"
              type="password"
              id="password"
              error={err === "pass"}
              helperText={err === "pass" && msg}
              autoComplete="current-password"
            />
            
            <div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoading}
                onClick={this.handleLogin}
                className={classes.submit}
              >
                Sign In
              </Button>
              {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotpassword" variant="body2">
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
export default connect(
  null,
  mapDispatchToProps
)(withStyles(useStyles)(SignInSide));
