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


const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

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
    // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    boxShadow: "0 0 20px 0 rgba(0,0,0,0.12)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    "& .MuiCardMedia-root": {
      paddingTop: "56.25%"
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      padding: theme.spacing(3)
    },
    "& .MuiDivider-root": {
      margin: theme.spacing(3, 0)
    },
    "& .MuiTypography--heading": {
      fontWeight: "bold"
    },
    "& .MuiTypography--subheading": {
      lineHeight: 1.8
    },
    "& .MuiAvatar-root": {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -theme.spacing(1)
      }
    }
  }
}));


const EngagementCard01 = () => {
  const classes =  useStyles();
  return (
    <Card className={classes.cardRoot}>
      <CardMedia
        className={"MuiCardMedia-root"}
        image={
          "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
        }
      />
      <CardContent className={"MuiCardContent-root"}>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          Nature Around Us
        </Typography>
        <Typography className={"MuiTypography--subheading"} variant={"caption"}>
          We are going to learn different kinds of species in nature that live
          together to form amazing environment.
        </Typography>
        <Divider />
        {/* {faces.map(face => (
          <Avatar className={"MuiAvatar-root"} key={face} src={face} />
        ))} */}
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <Update className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              10/05/2019
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <Update className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              10/05/2019
            </Typography>
          </Grid>
        </Grid>
      </CardActions> */}
    </Card>
  );
}

export default EngagementCard01;
