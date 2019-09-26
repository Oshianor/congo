import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles(theme => ({
  box: {
    maxWidth: 200,
    height: 200,
    border: "5px solid #014086",
    borderRadius: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 150,
      height: 150
    }
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
          <div className={classes.box}>
            <Typography variant='h5' > DGDA Payment</Typography>
            <div>
              <img src='/static/images/share.png' className={classes.image} />
            </div>
          </div>
        </Grid>
        <Grid sm={3} xs={6}>
          <div className={classes.box}>
            <Typography variant='h5' > DGI Payment</Typography>
            <div>
            <img src='/static/images/share.png' className={classes.image}/>
            </div>
          </div>
        </Grid>
        <Grid sm={3} xs={6}>
          <div className={classes.box}>
           <Typography variant='h5' > DGAD Payment</Typography>
           <div>
            <img src='/static/images/share.png' className={classes.image}/>
            </div>
          </div>
        </Grid>
          
        <Grid sm={3} xs={6}>
          <div className={classes.box}>
            <Typography variant='h5' > DGRK Payment</Typography>
            <div>
            <img src='/static/images/share.png' className={classes.image}/>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
   
export default Circle;