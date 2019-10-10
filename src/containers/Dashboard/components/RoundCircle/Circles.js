import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: 200,
    height: 200,
    backgroundColor: 'whitesmoke',
    border: "1px solid #ffffff",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    transition: '0.5s cubic-bezier(.47,1.64,.41,.8)',
    boxShadow: 'none',
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
      height: 150
    },
    "&:hover": {
      backgroundColor: '#f89b5f',
      border: "3px solid white",
      transform: 'scale(1.04)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
      '& p': {
        color: "white"
      }
    },
  },
  actions: {
    justifyContent: "flex-end"
  },
  circle: {
    marginTop: theme.spacing(15)
    // display: 'flex',
    // justifyContent: "space-be",
    // alignItems: "c enter",
    // [theme.breakpoints.only("xs")]: {

    // }
  },
  image: {
    height: 50,
    weight: 50,
    [theme.breakpoints.down("sm")]: {
      width: 35,
      height: 35
    },
    color: "#014086"
  }
}));



 

const Circle = props => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.circle}>
      <Grid container  justify="center" alignItems="center">
        <Grid sm={3} xs={6}>
           <Link href={"/dashboard/dgda"} underline='none'> 
            <div  className={classes.box}>
              <Typography variant='h5' component='p'  > DGDA Payment</Typography>
              <div>
                <img src='/static/images/share.png' className={classes.image} />
              </div>
            </div>
          </Link>
        </Grid>
        <Grid sm={3} xs={6}>
          <Link href={"/dashboard/dgi"}   underline='none'>
            <div className={classes.box}>
              <Typography variant='h5' component='p' > DGI Payment</Typography>
              <div>
              <img src='/static/images/share.png' className={classes.image}/>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid sm={3} xs={6}>
          <Link href={"/dashboard/dgrad"}  underline='none'>
            <div className={classes.box}>
            <Typography variant='h5' component='p' > DGAD Payment</Typography>
            <div>
              <img src='/static/images/share.png' className={classes.image}/>
              </div>
            </div>
          </Link>
        </Grid>
          
        <Grid sm={3} xs={6}>
          <Link href={"/dashboard/dgrk"}  underline='none'>
            <div className={classes.box}>
              <Typography variant='h5' component='p'  > DGRK Payment</Typography>
              <div>
              <img src='/static/images/share.png' className={classes.image}/>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
   
export default Circle;