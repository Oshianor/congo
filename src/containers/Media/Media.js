import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

// import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
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

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <MediaToolbar />
      <div className={classes.content}>
        <MediaCard users={users} />
        <MediaCard users={users} />
        <MediaCard users={users} />
        <MediaCard users={users} />
      </div>
    </div>
  );
};

export default UserList;
