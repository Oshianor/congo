import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack'
import InputBase from "@material-ui/core/InputBase";
import { withRouter } from "next/router";
import { Typography } from "@material-ui/core";
import { fontSize } from "@material-ui/system";

// Generate Order Data
function createData(id, accountName, accountNumber, accountBalance, accountType, accountStatus) {
  return { id, accountName, accountNumber, accountBalance, accountType, accountStatus };
}

const rows = [
  createData(
    0,
    'Olashile Adegbite',
    '123456',
    '164,000.00',
    'Savings',
    'InActive'
  ),
  createData(
    1,
    'Abundance Oshianor',
    '123456',
    '1,640,000.00',
    'Savings',
    'Active'
  ),
  createData(
    2,
    'Ayotunde Oseleye',
    '123456',
    '174,000.00',
    'Savings',
    'InActive'
  ),
  createData(
    3,
    'Olashile Adegbite',
    '123456',
    '1,840,000.00',
    'Savings',
    'Active'
  ),
 
];

const useStyles = makeStyles(theme => ({
  view: {
    color: '#1473E6',
    textDecoration: 'underline'
  },
  button: { 
    margin: theme.spacing(1),
    background: '#1473E6',
    color: 'white',
    height: 40,
  },
  earned: {
    float: 'right'
  },
  tableHead: {
    background: '#B1E5ED',
    color: '#3b3b3b',
    fontSize: 15
  },
  table: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3)
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: theme.spacing(3),
    marginLeft: 0,
    marginBottom: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit",
    backgroundColor: "#B1E5ED",
    borderRadius: 5,
    border: '1px solid #3b3b3b',
    marginLeft: theme.spacing(1),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 150
    }
  },
  start: {
    marginLeft: theme.spacing(5),

  },
  end: {
    marginLeft: theme.spacing(5),
  },
  count: {
    marginLeft: theme.spacing(2),
  },
}));

 function Tables(props) {
  const classes = useStyles();

  

  return (
    <React.Fragment>
      <Table size="small" className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow >
            <TableCell className={classes.tableHead}>Account Name</TableCell>
            <TableCell className={classes.tableHead}>Account Number</TableCell>
            <TableCell className={classes.tableHead}>Account Balance</TableCell>
            <TableCell className={classes.tableHead}>Account Type</TableCell>
            <TableCell className={classes.tableHead} align="right">Account Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.accountName}</TableCell>
              <TableCell>{row.accountNumber}</TableCell>
              <TableCell>{row.accountBalance}</TableCell>
              <TableCell>{row.accountType}</TableCell>
              <TableCell align="right">{row.accountStatus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

export default Tables;
