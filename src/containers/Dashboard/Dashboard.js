import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import Warning from "@material-ui/icons/Warning";
import Circle from "./components/RoundCircle/Circles";
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4} justify='space-between'>
          <Grid item sm={4} xs={12} >
            <Budget />
          </Grid>
          <Grid item sm={4} xs={12} >
            <TasksProgress />
          </Grid>
          <Grid item sm={4} xs={12} >
            <TotalProfit />
          </Grid>
        </Grid>
        <div>
          <Circle />
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
