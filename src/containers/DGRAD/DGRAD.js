import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

// import { UsersToolbar, UsersTable } from './components';

import MediaCard from "./components/MediaCard";
import MediaToolbar from "./components/MediaToolbar"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2),
    display: "flex"
  }
}));

const UserList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MediaToolbar />
      <div className={classes.content}>
        <MediaCard />
      </div>
    </div>
  );
};

export default UserList;
