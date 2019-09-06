import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));



const Notifications = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form style={{ padding: 20 }}>
        <CardHeader
          subheader="Grant users access to this dashbaord"
          title="Invitation"
        />
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter email Address"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid className={classes.item} item md={4} sm={6} xs={12}>
              <Typography gutterBottom variant="h6">
                Modules
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Users"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Prayer Request"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Media"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Sermons"
              />
            </Grid>
            <Grid className={classes.item} item md={4} sm={6} xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Daily Devotion"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Hymn"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    defaultChecked //
                  />
                }
                label="Events"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="outlined">
            Send Invitation
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
