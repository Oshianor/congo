import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import SearchInput from "../../../components/SearchInput";

// import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiDrawer-paper": {
      backgroundColor: "#56a19af5"
    }
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default ProductsToolbar;
