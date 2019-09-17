import React from 'react'
import Typography from "@material-ui/core/Typography";

export default function DidYouKnow() {
	return (
    <div>
      <Typography>Do You Know</Typography>

      <ul>
        <li>
          <Typography>Dividends or other distributions made to a resident or nonresident are subject to a 20% withholding tax.</Typography>
        </li>
        <li>
          <Typography>Capital gains are treated as taxable income and subject to the standard rate of corporate income tax.</Typography>
        </li>
        <li>
          <Typography>Corporate income tax is levied on a company's gross income minus allowable deductions.</Typography>
        </li>
        <li>
          <Typography>Expenses incurred to realize taxable income generally are deductible for tax purposes.</Typography>
        </li>
        <li>
          <Typography>Consolidated returns are not permitted; each company is required to file a separate return.</Typography>
        </li>
        <li>
          <Typography>Late payments of self-assessed tax are subject to a 20% penalty for a first offense and 40% for a second offense, plus 10% monthly interest on the amount due.</Typography>
        </li>
        <li>
          <Typography>A taxpayer may request a non- binding interpretation from the head of the tax administration.</Typography>
        </li>
      </ul>
    </div>
  );
}

