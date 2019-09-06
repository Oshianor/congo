import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Danger from "../../components/Typography/Danger.js";
import Warning from "@material-ui/icons/Warning";
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
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
      <Card>
        <CardHeader color="warning" stats icon>
          <CardIcon color="warning">
            <Icon>content_copy</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>Used Space</p>
          <h3 className={classes.cardTitle}>
            49/50 <small>GB</small>
          </h3>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Danger>
              <Warning />
            </Danger>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              Get more space
            </a>
          </div>
        </CardFooter>
      </Card>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
