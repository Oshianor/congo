import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Update from "@material-ui/icons/Update";


const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1)
  },
  statsItem: {
    display: "flex",
    alignItems: "center"
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  cardRoot: {
    transition: "0.3s",
    maxWidth: 304,
    // margin: "auto",
    borderRadius: 16,
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
  }
}));


const EngagementCard01 = () => {
  const classes =  useStyles();
  return (
    <Card className={classes.cardRoot}>
      <div className={'MuiCard__head'}>
        <Avatar
          className={'MuiAvatar-root'}
          src={
            'http://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Polymer_Project_logo.png/240px-Polymer_Project_logo.png'
          }
        />
        <Typography
          className={'MuiTypography--headLabel'}
          variant={'overline'}
          gutterBottom
        >
          7 Minutes
        </Typography>
      </div>
      <Divider className={'MuiDivider-root'} light />
      <CardContent className={'MuiCardContent-root'}>
        <Typography
          className={'MuiTypography--overline'}
          variant={'overline'}
          gutterBottom
        >
          Google Inc.
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h5'}
          gutterBottom
        >
          Project Polymer
        </Typography>
        <Typography className={'MuiTypography--subheading'} gutterBottom>
          Web components usher in a new era of web development based on
          encapsulated and interoperable custom
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EngagementCard01;
