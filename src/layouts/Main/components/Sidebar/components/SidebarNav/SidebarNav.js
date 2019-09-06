/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
// import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { withRouter } from "next/router";


const useStyles = makeStyles((theme) => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));


const SidebarNav = props => {
  const { pages, className, router, ...rest } = props;
  console.log("router", router);
  
  const classes = useStyles(props);
  
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            // activeClassName={classes.active}
            className={clsx(classes.button, page.href === router.asPath && classes.active)}
            // className={classes.button}
            href={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

export default withRouter(SidebarNav);
