import React from 'react';
import Link from '../../../../Link';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none"
  },
  header: {
    color: "#e5e5e5"
  }
}));

const Topbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Link href="/">
          <Typography className={classes.header} variant="h4">
            CHURCHEE
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
