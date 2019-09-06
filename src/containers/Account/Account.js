import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
// import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SerratedTabs from "./components/SerratedTabs";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Account = () => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  return (
    <div className={classes.root}>
      <AppBar
        position={"static"}
        elevation={0}
        // style={{ backgroundColor: "#E6E8EB" }}
      >
        <Toolbar
          // you need to set override hidden in toolbar
          style={{ overflow: "hidden" }}
        >
          <SerratedTabs
            style={{ alignSelf: "flex-end" }}
            tabs={[
              { label: "Profile" },
              { label: "App Configuration" },
              { label: "Contacts" },
              { label: "Settings" }
            ]}
            tabStyle={{
              bgColor: "#4486a3",
              selectedBgColor: "#ffffff"
            }}
            tabProps={{
              disableRipple: true
            }}
            value={index}
            onChange={(e, i) => setIndex(i)}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        {index === 0 && <Profile />}
        {index === 3 && <Settings />}
      </div>
    </div>
  );
};

export default Account;
