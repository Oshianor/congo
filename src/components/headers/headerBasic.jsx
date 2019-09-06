import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar variant="dense" style={{ justifyContent: "center" }}>
          <img src="/static/images/logo-main.png" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
