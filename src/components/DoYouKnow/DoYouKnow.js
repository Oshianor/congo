import React from 'react'
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";


const useStyles = makeStyles(theme => ({
  ul: {
    margin: theme.spacing(1.5)
  },
  li: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));
export default function DidYouKnow() {
  const classes = useStyles();

  const first = () => {
    return (
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Dividends or other distributions made to a resident or nonresident
            are subject to a 20% withholding tax.
          </Typography>
        </li>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Capital gains are treated as taxable income and subject to the
            standard rate of corporate income tax.
          </Typography>
        </li>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Corporate income tax is levied on a company's gross income minus
            allowable deductions.
          </Typography>
        </li>
      </ul>
    );
  }


  const second = () => {
    return (
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Expenses incurred to realize taxable income generally are deductible
            for tax purposes.
          </Typography>
        </li>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Consolidated returns are not permitted; each company is required to
            file a separate return.
          </Typography>
        </li>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            Late payments of self-assessed tax are subject to a 20% penalty for
            a first offense and 40% for a second offense, plus 10% monthly
            interest on the amount due.
          </Typography>
        </li>
        <li className={classes.li}>
          <Typography className={classes.liText}>
            A taxpayer may request a non- binding interpretation from the head
            of the tax administration.
          </Typography>
        </li>
      </ul>
    );
  }

  const randomize = (myArray) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  const arr = [first(), second()];

	return (
    <div>
      <Typography className={classes.textHead} variant="h5">
        Do You Know
      </Typography>

      {randomize(arr)}
    </div>
  );
}

