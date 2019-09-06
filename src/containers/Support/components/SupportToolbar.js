import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer";
import AddSupport from "./AddSupport";

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  slider: {
    backgroundColor: "#37474f"
  },
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiDrawer-paper": {
      backgroundColor: "#56a19af5"
    }
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [ open, setOpen ] = React.useState(false);


  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />

        <Button
          color="primary"
          onClick={() => setOpen(true)}
          variant="contained"
        >
          Create a support message
        </Button>
      </div>
      <Drawer
        open={open}
        elevation={24}
        // classes={{ paper: classes.sider }}
        anchor="right"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <AddSupport />
      </Drawer>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
