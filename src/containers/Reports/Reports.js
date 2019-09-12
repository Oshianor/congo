import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SupportList from "./components/supportList";
import { makeStyles } from "@material-ui/core/styles";
import SupportToolbar from "./components/SupportToolbar";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(3)
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  img: {
    width: "100%"
  }
}));


export default function Support() {
  const classes = useStyles();
	return (
    <div className={classes.container}>
			<SupportToolbar />
      <Grid container justify="center">
        <Grid item sm={12} md={6}>
          <Typography variant="h3" align="center">Support</Typography>
          <img src="/static/images/26680.png" className={classes.img} />
        </Grid>
        <Grid item sm={12} md={6}>
          <SupportList />
        </Grid>
      </Grid>
    </div>
  );
}
