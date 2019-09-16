import React, { Component } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Collapse from "@material-ui/core/Collapse";
import Link from "../../../Link";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  root: {
    backgroundColor: "#014086"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10
  },
  head: {
    // margin: "10px 5px",
		// marginRight: 10,
		borderRight: "1px solid",
    textDecoration: "none",
    padding: 5,
    color: "whitesmoke"
  }
}));


const TopNav = (props) =>  {
	const classes = useStyles();
	const { open } = props;
	return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Container maxWidth="lg" className={classes.container}>
          <Button className={classes.head} variant="text" color="inherit">
            About Us
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Sustainable Banking
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Investor Relaations
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Media
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Careers
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Branch & ATM Locator
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Customer Support
          </Button>
          <Button className={classes.head} variant="text" color="inherit">
            Customer Locations
          </Button>
        </Container>
      </Collapse>
    </div>
  );
}


export default TopNav;