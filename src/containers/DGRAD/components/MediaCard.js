import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import RemoveRedEyeOutlined from "@material-ui/icons/RemoveRedEyeOutlined";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    // alignItems: "flex-end",
    flexDirection: "column",
    height: 300,
    width: 230,
    background:
      'url("https://s-media-cache-ak0.pinimg.com/236x/c5/86/e6/c586e6afd87ee357bbab52df241480ac.jpg") no-repeat 30% center'
  },
  detail: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
    // display: "flex",
    // justifyContent: "space-between"
  },
  bottom: {
    justifyContent: "space-between",
    textAlign: "center",
    padding: theme.spacing(1)
  }
}));

const MediaCard = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.detail}>
        <Typography variant="h6" >Family Day (2019)</Typography>

        <Fab
          color="primary"
          aria-label="add"
          size="small"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
        {/* <Paper square className={classes.detail}>
          <div className={classes.bottom}>
            <FavoriteBorderOutlined />
            <Typography>23</Typography>
          </div>
          <div className={classes.bottom}>
            <RemoveRedEyeOutlined />
            <Typography>23</Typography>
          </div>
          <div className={classes.bottom}>
            <FavoriteBorderOutlined />
            <Typography>23</Typography>
          </div>
        </Paper> */}
      </div>
    </Paper>
  );
};

MediaCard.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired
};

export default MediaCard;
