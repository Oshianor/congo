import React, { Component } from 'react';
import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
		borderTop: "1px solid #45404038",
		paddingTop: 10,
		paddingBottom: 10,
		display: "flex",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center"
  },
  left: {
    flexWrap: "wrap",
    // justifyContent: "flex-start",
    alignItems: "center"
  },
  right: {
    // justifyContent: "flex-end",
    alignItems: "center"
  }
}));

const Footer = () => {
	const classes = useStyles();
	return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.left}>
        <Button variant="text">Home</Button>
        <Button variant="text">privacy policy</Button>
        <Button variant="text">About Us</Button>
        <Button variant="text">Faq</Button>
        <Button variant="text">Terms & Conditions</Button>
      </div>
        <Typography className={classes.right}>© 2019 Access Bank Plc.</Typography>
    </Container>
  );
}

export default Footer;