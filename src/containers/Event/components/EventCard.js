import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardContent";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Update from '@material-ui/icons/Update';
import Avatar from "@material-ui/core/Avatar";



const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    // height: 64,
    // width: 64,
    margin: "0 auto",
    // border: `1px solid ${theme.palette.divider}`,
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%"
  },
  statsItem: {
    display: "flex",
    alignItems: "center"
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  avatar: {
    margin: 10
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.imageContainer}>
          {/* <img alt="Product" className={classes.image} src={product.imageUrl} /> */}
          <Avatar className={classes.avatar}>H</Avatar>
        </div>
        <Typography align="center" gutterBottom variant="h4">
          {product.title}
        </Typography>
        <Typography align="center" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid container justify="space-between">
          <Grid className={classes.statsItem} item>
            <Update className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography display="inline" variant="body2">
              10/05/2019
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
