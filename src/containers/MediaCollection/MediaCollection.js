import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import ContainedTabs from "./components/mediaTab";
import MediaToolbar from "./components/MediaToolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  // root: {
  //   justifyContent: 'center',
  //   flexWrap: 'wrap',
  // },
  paper: {
    padding: theme.spacing(1, 2),
  }
}));


function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}


const UserList = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      {/* <div className={classes.content}></div> */}
      <Paper elevation={0} className={classes.paper}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Media
          </Link>
          <Typography color="textPrimary">Family Day Collection</Typography>
        </Breadcrumbs>
      </Paper>
      <ContainedTabs
        style={{ alignSelf: "flex-end" }}
        tabs={[
          { label: "Videos" },
          { label: "Pictures" },
        ]}
        value={value}
        onChange={(e, i) => setValue(i)}
      />
      <div className={classes.content}>
        <TabPanel value={value} index={0}>
          <MediaToolbar />
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default UserList;




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}