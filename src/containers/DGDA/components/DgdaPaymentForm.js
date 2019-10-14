import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "../../../components/Card/Card";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import GenerateID from './generateReferenceId'
import { connect } from 'react-redux';




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  formControl: {
    width: '100%',
    // minWidth: 120
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: theme.spacing(5)
  },
}));

const DgdaPaymentForm = (props) => {
  const classes = useStyles();

 

  const [ value, setValue ] = React.useState({
    customOffice: "",
  });

  const [ isOpen, setIsOpen ] = React.useState(false)

  
  const [ modal, modalVisible ] = React.useState(false);

  const handleClickOpen = () => {
    modalVisible( true );
  };

  const handleModalClose = () => {
    modalVisible( false );
  };

  function handleOpen() {
    setIsOpen(true);
    modalVisible( false );

  }

  function handleClose() {
    setIsOpen(false);
  }

  const handleChange = name => event => {
    setValue({ ...value, [name]: event.target.value });
  };




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
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-simple">Custom Office</InputLabel>
              <Select
                value={value.customOffice}
                onChange={handleChange("customOffice")}
                input={
                  <OutlinedInput
                    labelWidth={100}
                    name="age"
                    id="outlined-age-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="male">warri HQ</MenuItem>
                <MenuItem value="female">delta branch</MenuItem>
                <MenuItem value="others">PowerPoint Branch</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              type='number'
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
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="residentialAddress"
              label="Importers NR"
              name="residentialAddress"
              autoComplete="Residential Address"
            />
          </Grid> */}
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
              onClick={handleClickOpen}
              size="large"
              color="primary"
            >
              Proceed
            </Button>
          </Grid>
        </Grid>
      </form>
      <div>
        <Dialog
          open={modal}
          // onClose={}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Bulletin Status"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Valid or Invalid Bulletin, Click proceed to continue.
            </DialogContentText>
          </DialogContent>
          <DialogActions className={classes.buttons}>
          <Button onClick={handleModalClose} color="primary"
            style={{ color: 'red'}}>
              Back
            </Button>

            <Button
              onClick={handleOpen}
              color="secondary"
              style={{ background:'#014086', color: 'white'}}>
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
      <GenerateID isOpen={isOpen} handleClose={handleClose} />
    </Card>
  );
};

export default DgdaPaymentForm;

































































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
