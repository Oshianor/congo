import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  headText: {
    fontSize: 50,
    lineHeight: 1.5,
    letterSpacing: 1,
    textAlign: "center",
    wordSpacing: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
      lineHeight: 1
    }
  },
  headText1: {
    fontSize: 70,
    color: "red",
    lineHeight: 1.5,
    letterSpacing: 1,
    textAlign: "center",
    wordSpacing: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
      lineHeight: 1
    }
  },
  bodyText: {
    lineHeight: 1.5,
    wordSpacing: 1,
    textAlign: "center",
    color: "#4385f5",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: 1,
      margin: theme.spacing(2)
    }
  },
  img: {
    width: "80%"
  },
  root: { backgroundColor: "white", maxHeight: 800 }
}));

export default function AutomatedSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center">
          <Grid item xs="12" sm="4" md="6">
            <Typography variant="h1" className={classes.headText}>
               ONLINE TAX PAYMENT MADE EASY 
            </Typography>

            <Typography variant="h5" className={classes.bodyText}>
              Make all your tax payment in one place 
            </Typography>
          </Grid>
          <Grid item xs="12" sm="8" md="6">
            <img
              src="/static/images/24center.jpg"
              className={classes.img}
              style={{ margin: 50 }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
