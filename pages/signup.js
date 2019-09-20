import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import { withRouter } from "next/router";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import isEmail from 'validator/lib/isEmail';
import HeaderBasic from "../src/components/headers/headerBasic";
import Axios from "axios";
import { config } from "../config";
import axios from "axios";




const useStyles = theme => ({
  root: {
    height: "100vh",
    backgroundColor: "transparent"
  },
  image: {
    backgroundImage: "url('/static/images/2584960.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(4),
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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#014086"
  },
  formControl: {
    // margin: theme.spacing(1),
    width: "100%"
  }
});

 class SignInSide extends Component{

  state = {
    accountNumber: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    residentialAddress: '',
    country: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    tinNumber: '',
    taxInstitutionBenet: '',
    typeOfCustomer: '',
    err: '',
    msg: ''
  };


 handleSignUp = async e => {
  e.preventDefault();
    const { router } = this.props;

    const {
      accountNumber,
      firstName,
      lastName,
      password,
      confirmPassword,
      email,
      residentialAddress,
      country,
      state,
      zipCode,
      phoneNumber,
      tinNumber,
      taxInstitutionBenet,
      typeOfCustomer,
      err,
      msg
    } = this.state;

    this.setState({
      err: "",
      msg: ""
    });


    if (accountNumber === "") {
      this.setState({
        err: "accountNumber",
        msg: "account number can't be empty"
      });
      return;
    }

    if (firstName === "") {
      this.setState({
        err: "firstName",
        msg: "first name can't be empty"
      });
      return;
    }

    if (lastName === "") {
      this.setState({
        err: "lastName",
        msg: "last name can't be empty"
      });
      return;
    }

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
        msg: "password can't be empty"
      });
      return;
    }

    if (confirmPassword == '' || confirmPassword !== password) {
      this.setState({
        err: "confirmPassword",
        msg: "Password do not match"
      });
      return;
    }

    if (residentialAddress === "") {
      this.setState({
        err: "residentialAddress",
        msg: "residential address can't be empty"
      });
      return;
    }

    if (country === "") {
      this.setState({
        err: "country",
        msg: "country can't be empty"
      });
      return;
    }

    if (state === "") {
      this.setState({
        err: "state",
        msg: "state can't be empty"
      });
      return;
    }

    if (zipCode === "") {
      this.setState({
        err: "zipCode",
        msg: "zip code can't be empty"
      });
      return;
    }

    if (phoneNumber === "") {
      this.setState({
        err: "phoneNumber",
        msg: "phone number can't be empty"
      });
      return;
    }

    if (tinNumber === "") {
      this.setState({
        err: "tinNumber",
        msg: "tin number can't be empty"
      });
      return;
    }

    if (taxInstitutionBenet === "") {
      this.setState({
        err: "taxInstitutionBenet",
        msg: "tax institution benet can't be empty"
      });
      return;
    }

    if (typeOfCustomer === "") {
      this.setState({
        err: "typeOfCustomer",
        msg: "type of customer can't be empty"
      });
      return;
    }

    try {
       const register = await axios({
         method: "post",
         url: config.register,
         data: {
           accountNumber: Number(accountNumber),
           firstName,
           lastName,
           password,
           confirmPassword,
           email,
           residentialAddress,
           country,
           state,
           zipCode: Number(zipCode),
           phoneNumber,
           tinNumber: Number(tinNumber),
           taxInstitutionBenet,
           typeOfCustomer
         }
       });
       console.log("register", register);
       router.push("/mailverificationsent?e=" + email);
    } catch (error) {
      console.log(error);
      console.log(error.response);
       
    }
  }

  handleChange = value => event => {
    this.setState({
      [value]: event.target.value
    });
};

  

  
  render () { 
    const { classes }  = this.props;
    const {
      accountNumber,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      residentialAddress,
      country,
      state,
      zipCode,
      phoneNumber,
      tinNumber,
      taxInstitutionBenet,
      typeOfCustomer,
      err,
      msg
    } = this.state;


    console.log("this.state", this.state);
    

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component="div">
          <HeaderBasic />
          <Container component="main" maxWidth="lg">
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon className={classes.avatarIcon} />
              </Avatar>
              <Typography component="h1" variant="h5" className={classes.sign}>
                Sign up
              </Typography>
              <form
                onSubmit={this.handleSignUp}
                className={classes.form}
                noValidate
              >
                {err === "others" && (
                  <Paper className={classes.alert}>{msg}</Paper>
                )}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={accountNumber}
                      onChange={this.handleChange("accountNumber")}
                      id="accountNumber"
                      label="Account Number"
                      name="accountNumber"
                      autoComplete="Account Number"
                      error={err === "accountNumber"}
                      helperText={err === "accountNumber" && msg}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      value={firstName}
                      onChange={this.handleChange("firstName")}
                      id="firstName"
                      label="First Name"
                      error={err === "firstName"}
                      helperText={err === "firstName" && msg}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      value={lastName}
                      onChange={this.handleChange("lastName")}
                      label="Last Name"
                      name="lastName"
                      error={err === "lastName"}
                      helperText={err === "lastName" && msg}
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      value={email}
                      onChange={this.handleChange("email")}
                      label="Email Address"
                      name="email"
                      error={err === "email"}
                      helperText={err === "email" && msg}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      type="password"
                      value={password}
                      onChange={this.handleChange("password")}
                      id="password"
                      error={err === "password"}
                      helperText={err === "password" && msg}
                      label="Password"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="password"
                      type="password"
                      value={confirmPassword}
                      onChange={this.handleChange("confirmPassword")}
                      label="Confirm Password"
                      name="confirmPassword"
                      error={err === "confirmPassword"}
                      helperText={err === "confirmPassword" && msg}
                      autoComplete="confirmPassword"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="residentialAddress"
                      value={residentialAddress}
                      onChange={this.handleChange("residentialAddress")}
                      label="Residential Address"
                      name="residentialAddress"
                      error={err === "residentialAddress"}
                      helperText={err === "residentialAddress" && msg}
                      autoComplete="Residential Address"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-age-simple">
                        Country
                      </InputLabel>
                      <Select
                        value={country}
                        onChange={this.handleChange("country")}
                        error={err === "country"}
                        helperText={err === "country" && msg}
                        input={
                          <OutlinedInput
                            labelWidth={50}
                            name="age"
                            id="outlined-age-simple"
                          />
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Congo">Congo</MenuItem>
                        <MenuItem value="Nigeria">Nigeria</MenuItem>
                        <MenuItem value="Liberia">Liberia</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-age-simple">
                        State
                      </InputLabel>
                      <Select
                        value={state}
                        onChange={this.handleChange("state")}
                        error={err === "state"}
                        helperText={err === "state" && msg}
                        input={
                          <OutlinedInput
                            labelWidth={50}
                            name="age"
                            id="outlined-age-simple"
                          />
                        }
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Lagos">Lagos</MenuItem>
                        <MenuItem value="oyo">oyo</MenuItem>
                        <MenuItem value="kano">kano</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="zipCode"
                      value={zipCode}
                      onChange={this.handleChange("zipCode")}
                      error={err === "zipCode"}
                      helperText={err === "zipCode" && msg}
                      label="Zip Code"
                      name="zipCode"
                      autoComplete="lname"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={phoneNumber}
                      onChange={this.handleChange("phoneNumber")}
                      error={err === "phoneNumber"}
                      helperText={err === "phoneNumber" && msg}
                      name="phoneNumber"
                      label="Phone Number"
                      type="number"
                      id="phoneNumber"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={tinNumber}
                      onChange={this.handleChange("tinNumber")}
                      error={err === "tinNumber"}
                      helperText={err === "tinNumber" && msg}
                      id="tim"
                      label="Customer Report Number (TIN)"
                      name="tin"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-age-simple">
                        {" "}
                        Tax Insttitution Benet
                      </InputLabel>
                      <Select
                        value={taxInstitutionBenet}
                        onChange={this.handleChange("taxInstitutionBenet")}
                        error={err === "taxInstitutionBenet"}
                        helperText={err === "taxInstitutionBenet" && msg}
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
                        <MenuItem value="Ten">Ten</MenuItem>
                        <MenuItem value="Twenty">Twenty</MenuItem>
                        <MenuItem value="Thirty">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel htmlFor="outlined-age-simple">
                        Type of Customer
                      </InputLabel>
                      <Select
                        value={typeOfCustomer}
                        onChange={this.handleChange("typeOfCustomer")}
                        error={err === "typeOfCustomer"}
                        helperText={err === "typeOfCustomer" && msg}
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
                        <MenuItem value="self">self</MenuItem>
                        <MenuItem value="third">third</MenuItem>
                        <MenuItem value="multiple">multiple</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="allowExtraEmails"
                          color="primary"
                          style={{ color: "#014086" }}
                        />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={this.handleSignUp}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link
                      href="/login"
                      variant="body2"
                      className={classes.link}
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    );
  }
 }
export default withRouter(withStyles(useStyles)(SignInSide));