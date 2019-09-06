
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 65
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  slash: {
    borderRight: "1px solid black",
    padding: "0px 5px"
  }
}));



export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" elevation={0} color="default"> */}
        <Container component="main" maxWidth="lg">
          <Toolbar>
            <Typography color="textSecondary" variant="h4">CHURCHee</Typography>
            <div className={classes.root} />
            <Button variant="text" color="inherit">
              Log In
            </Button>
            <Button variant="contained" color="secondary">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      {/* </AppBar> */}
    </div>
  );
}
