import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import Media from "@material-ui/icons/PermMedia";
import Mic from '@material-ui/icons/Mic';
import Book from '@material-ui/icons/Book';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import Event from "@material-ui/icons/Event";
import ContactSupportOutlined from "@material-ui/icons/ContactSupportOutlined";

import { Profile, SidebarNav, UpgradePlan } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: "Dashboard",
      href: "/dashboard/in",
      icon: <DashboardIcon />
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: <PeopleIcon />
    },
    {
      title: "Media",
      href: "/dashboard/media",
      icon: <Media />
    },
    {
      title: "Events",
      href: "/dashboard/events",
      icon: <Event />
    },
    {
      title: "Sermon",
      href: "/dashboard/sermons",
      icon: <Mic />
    },
    {
      title: "Devotion",
      href: "/dashboard/devotion",
      icon: <Book />
    },
    {
      title: "Prayer Request",
      href: "/dashboard/prayer-request",
      icon: <AccountBoxIcon />
    },
    {
      title: "Hymn",
      href: "/dashboard/hymn",
      icon: <AccountBoxIcon />
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: <AccountBoxIcon />
    },
    // {
    //   title: "Settings",
    //   href: "/dashboard/settings",
    //   icon: <SettingsIcon />
    // },
    {
      title: "Support",
      href: "/dashboard/support",
      icon: <ContactSupportOutlined />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
        <UpgradePlan />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
