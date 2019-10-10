import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { withRouter }  from 'next/router'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };


  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  const [ value, setValue ] = React.useState({
    password: "",
    confirmPassword: '',
    err: '',
    msg: ''
  });

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };

  
  const handleModalOk = () => {

    if ( value.password === '') {
      setValue({
        err: 'password',
        msg: 'password can not be empty'
      })
      return
    }

    if ( value.password !== value.confirmPassword) {
      setValue({
        err: 'confirmPassword',
        msg: 'password does not match'
      })
      return
    }
    
    modalVisible( false )

  }

  
  
  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <React.Fragment>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop
        })}
      >
        <Topbar onSidebarOpen={handleSidebarOpen} />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? 'persistent' : 'temporary'}
        />
        <main className={classes.content}>
          {children}
          {/* <Footer /> */}
        </main>
      </div>

      <div>
        <Dialog
          open={modal}
          // onClose={}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"First Login Password Change"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              value={value.password}
              onChange={handleChange("password")}
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              error={value.err === "password"}
              helperText={value.err === "password" && value.msg}
              />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              value={value.confirmPassword}
              onChange={handleChange("confirmPassword")}
              id="password"
              label="confirm password"
              name="confirmPassword"
              autoComplete="confirmPassword"
              
              error={value.err === "confirmPassword"}
              helperText={value.err === "confirmPassword" && value.msg}
            />
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.buttons}>
                   
            <Button onClick={handleModalOk} color="primary">
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default withRouter(Main);
