import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ConfirmPayment from "./confirmPayment";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const Dgda = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Card
      title="DGDA Payments"
      subtitle="Fill the following form to pay your DGDA payments"
      className={"MuiCardContent-inner"}
    >
      <form className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Year of Declearation"
              name="accountNumber"
              autoComplete="Account Number"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="Custom Office"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Liquidation No."
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Liquidation Amount"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="residentialAddress"
              label="Importers NR"
              name="residentialAddress"
              autoComplete="Residential Address"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="NR No"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              multiline
              rows={4}
              id="lastName"
              label="Other Comments"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleOpen}
              size="large"
              color="primary"
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </form>
      <ConfirmPayment handleClose={handleClose} open={open} />
    </Card>
  );
};

export default Dgda;

































































// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import CardHeader from "@material-ui/core/CardHeader";
// import Button from "@material-ui/core/Button";
// import ConfirmPayment from "./confirmPayment";

// const offset = 40;
// const cardShadow = "0px 14px 80px rgba(34, 35, 58, 0.2)";
// // const cardShadow = "0px 0px 0px rgba(34, 35, 58, 0.2)";
// const headerShadow = "4px 4px 20px 1px rgba(0, 0, 0, 0.2)";

// const useStyles = makeStyles(theme => ({
//   root: {
//     marginTop: offset,
//     borderRadius: theme.spacing(0.5),
//     transition: "0.3s",
//     boxShadow: cardShadow,
//     position: "relative",
//     [theme.breakpoints.only("sm")]: {
//       width: "70%"
//     },
//     [theme.breakpoints.only("md")]: {
//       width: "80%"
//     },
//     [theme.breakpoints.only("xs")]: {
//       width: "90%"
//     },
//     width: "50%",
//     overflow: "initial",
//     background: "#ffffff",
//     padding: theme.spacing(2, 0),
//     "& .MuiCardHeader-root": {
//       flexShrink: 0,
//       position: "absolute",
//       top: -offset,
//       right: 20,
//       left: 20,
//       borderRadius: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//       // backgroundColor: "#f89b5f",
//       overflow: "hidden",
//       boxShadow: headerShadow,
//       textAlign: "left",
//       "& .MuiCardHeader-title": {
//         color: "#ffffff",
//         fontWeight: 900,
//         letterSpacing: 1
//       },
//       "& .MuiCardHeader-subheader": {
//         color: "#ffffff",
//         opacity: 0.87,
//         fontWeight: 200,
//         letterSpacing: 0.4
//       }
//     },
//     "& .MuiCardContent-root": {
//       textAlign: "left",
//       "& .MuiCardContent-inner": {
//         paddingTop: "38px",
//         overflowX: "auto"
//       }
//     }
//   }
// }));


// const Dgda = () => {
// 	const classes = useStyles();
	
// 	const [open, setOpen] = React.useState(true);

// 	function handleOpen() {
// 		setOpen(true);
// 	}

// 	function handleClose() {
//     setOpen(false);
//   }

//   return (
//     <Card className={classes.root}>
//       <CardHeader
//         className={"MuiCardHeader-root"}
//         title={"DGDA Payments"}
//         subheader={"Fill the following form to pay your DGDA payments"}
//         classes={{
//           title: "MuiCardHeader-title",
//           subheader: "MuiCardHeader-subheader"
//         }}
//       />
//       <CardContent className={"MuiCardContent-root"}>
//         <div className={"MuiCardContent-inner"}>
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Year of Declearation"
//                   name="accountNumber"
//                   autoComplete="Account Number"
//                   className={classes.textField}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="fname"
//                   name="firstName"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="Custom Office"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Liquidation No."
//                   name="lastName"
//                   autoComplete="lname"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Liquidation Amount"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="residentialAddress"
//                   label="Importers NR"
//                   name="residentialAddress"
//                   autoComplete="Residential Address"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="NR No"
//                   name="lastName"
//                   autoComplete="lname"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   multiline
//                   rows={4}
//                   id="lastName"
//                   label="Other Comments"
//                   name="lastName"
//                   autoComplete="lname"
//                 />
//               </Grid>

//               <Grid item xs={12}>
//                 <Button variant="contained" onClick={handleOpen} size="large" color="primary">
//                   Proceed
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
// 					<ConfirmPayment handleClose={handleClose} open={open} />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default Dgda;
