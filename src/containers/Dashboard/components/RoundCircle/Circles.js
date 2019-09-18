import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles((theme) => ({
    box: {
      width: 200,
      height: 200,
      border: "5px solid #014086",
      borderRadius: 200,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    actions: {
      justifyContent: 'flex-end'
    },
    circle: {
      marginTop: theme.spacing(15),
      display: 'flex',
     
    },
    image: {
      height: 50,
      weight: 50,
      color: '#014086'
    }
   
  }));



 

const Circle = props => {

  const classes = useStyles();

  return (
 
    <Container maxWidth='xl' className={classes.circle}>

      <Grid container>
        <Grid sm={3}>
          <div className={classes.box}>
            <Typography variant='h5' > DGDA Payment</Typography>
            <div>
              <img src='/static/images/share.png' className={classes.image} />
            </div>
          </div>
        </Grid>
        <Grid sm={3}>
          <div className={classes.box}>
            <Typography variant='h5' > DGI Payment</Typography>
            <div>
            <img src='/static/images/share.png' className={classes.image}/>
            </div>
          </div>
        </Grid>
        <Grid sm={3}>
          <div className={classes.box}>
           <Typography variant='h5' > DGAD Payment</Typography>
           <div>
            <img src='/static/images/share.png' className={classes.image}/>
            </div>
          </div>
        </Grid>
          
        <Grid sm={3}>
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