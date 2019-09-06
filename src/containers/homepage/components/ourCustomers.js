import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  headline: {
    fontSize: 25,
    margin: theme.spacing(3)
  },
  textBody: {
    fontSize: 18,
    lineHeight: 1.5
  },
  logos: {
    opacity: 0.2,
    // backgroundColor: "black",
    display: "flex",
    justifyContent: "space-between"
  },
  cusImg: {
    width: 50,
    padding: 5
  },
  mfm: {
    marginTop: theme.spacing(2),
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "fantasy"
  }
}));


function OurCustomers() {
  const classes = useStyles();
	return (
    <Container maxWidth="md" className={classes.root}>
      <Typography className={classes.headline} variant="overline">
        OUR FRIENDS IN HIGH PLACES
      </Typography>

      <Typography className={classes.textBody} variant="caption">
        Build customer confidence by listing your users! Anyone who has used
        your service and has been pleased with it should have a place here! From
        Fortune 500 to start-ups, all your app enthusiasts will be glad to be
        featured in this section. Moreover, users will feel confident seing
        someone vouching for your product!
      </Typography>

      <div className={classes.logos}>
        <Typography className={classes.mfm} variant="overline">
          MFM
        </Typography>
        <Typography className={classes.mfm} variant="overline">
          RCCG
        </Typography>
        <Typography className={classes.mfm} variant="overline">
          DAYSTAR
        </Typography>
        <Typography className={classes.mfm} variant="overline">
          TREM
        </Typography>
        <Typography className={classes.mfm} variant="overline">
          WINNERS CHAPEL
        </Typography>
      </div>
    </Container>
  );
}

export default OurCustomers;