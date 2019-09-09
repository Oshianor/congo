import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center"
  },
  root: {
    transition: "0.3s",
    maxWidth: 280,
    borderRadius: 5,
    marginBottom: 5,
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    },
    padding: theme.spacing(3),
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    "& .MuiCard__head": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& .MuiAvatar-root": {
        width: 60,
        height: 60,
        backgroundColor: "#ffffff",
        transform: "translateY(50%)"
      },
      "& .MuiTypography--headLabel": {
        color: theme.palette.grey[500]
      }
    },
    "& .MuiDivider-root": {
      marginLeft: -theme.spacing(3),
      marginRight: -theme.spacing(3)
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      padding: 0,
      paddingTop: theme.spacing(6),
      "& .MuiTypography--overline": {
        fontSize: 16,
        fontWeight: "bold",
        color: theme.palette.grey[500]
      },
      "& .MuiTypography--heading": {
        fontWeight: 900
      },
      "& .MuiTypography--subheading": {
        lineHeight: 1.8
      }
    }
  },
  cong: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  headline: {
    fontSize: 25,
    textAlign: "center"
  }
}));


function OurCustomers() {
  const classes = useStyles();
	return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography className={classes.headline} variant="overline">
        OUR FRIENDS IN HIGH PLACES
      </Typography>

      <div className={classes.cong}>
        <Card className={classes.root}>
          <div className={"MuiCard__head"}>
            <Avatar
              className={"MuiAvatar-root"}
              src={
                "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png"
              }
            />
          </div>
          <Divider className={"MuiDivider-root"} light />
          <CardContent className={"MuiCardContent-root"}>
            <Typography
              className={"MuiTypography--overline"}
              variant={"overline"}
              gutterBottom
            >
              Google Inc.
            </Typography>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Project Polymer
            </Typography>
            <Typography className={"MuiTypography--subheading"} gutterBottom>
              Web components usher in a new era of web development based on
              encapsulated and interoperable custom
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <div className={"MuiCard__head"}>
            <Avatar
              className={"MuiAvatar-root"}
              src={
                "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png"
              }
            />
          </div>
          <Divider className={"MuiDivider-root"} light />
          <CardContent className={"MuiCardContent-root"}>
            <Typography
              className={"MuiTypography--overline"}
              variant={"overline"}
              gutterBottom
            >
              Google Inc.
            </Typography>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Project Polymer
            </Typography>
            <Typography className={"MuiTypography--subheading"} gutterBottom>
              Web components usher in a new era of web development based on
              encapsulated and interoperable custom
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <div className={"MuiCard__head"}>
            <Avatar
              className={"MuiAvatar-root"}
              src={
                "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png"
              }
            />
          </div>
          <Divider className={"MuiDivider-root"} light />
          <CardContent className={"MuiCardContent-root"}>
            <Typography
              className={"MuiTypography--overline"}
              variant={"overline"}
              gutterBottom
            >
              Google Inc.
            </Typography>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Project Polymer
            </Typography>
            <Typography className={"MuiTypography--subheading"} gutterBottom>
              Web components usher in a new era of web development based on
              encapsulated and interoperable custom
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <div className={"MuiCard__head"}>
            <Avatar
              className={"MuiAvatar-root"}
              src={
                "http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png"
              }
            />
          </div>
          <Divider className={"MuiDivider-root"} light />
          <CardContent className={"MuiCardContent-root"}>
            <Typography
              className={"MuiTypography--overline"}
              variant={"overline"}
              gutterBottom
            >
              Google Inc.
            </Typography>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h5"}
              gutterBottom
            >
              Project Polymer
            </Typography>
            <Typography className={"MuiTypography--subheading"} gutterBottom>
              Web components usher in a new era of web development based on
              encapsulated and interoperable custom
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

export default OurCustomers;