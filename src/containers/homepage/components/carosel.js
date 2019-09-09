import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 10,
    marginBottom: 50
  },
  headText: {
    fontSize: 60,
    lineHeight: 1.2,
    letterSpacing: 1,
    textAlign: "center",
    wordSpacing: 5
  },
  headText1: {
    fontSize: 60,
    color: "red",
    lineHeight: 1.2,
    letterSpacing: 1,
    textAlign: "center",
    wordSpacing: 5
  },
  bodyText: {
    lineHeight: 1.5,
    wordSpacing: 1,
    textAlign: "center",
    color: "#4385f5"
  },
  img: {
    width: "100%"
  }
}));


export default function ThemeSection() {
  const classes = useStyles();
	return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs="12" sm="4" alignItems="center">
          <Typography variant="h1" className={classes.headText}>
            Tax
          </Typography>
          <Typography variant="h1" className={classes.headText1}>
            Payment
          </Typography>

          <Typography variant="h5" className={classes.bodyText}>
            Pay your tax directly from online app
          </Typography>
        </Grid>
        <Grid item xs="12" sm="8">
          <img
            src="/static/images/2784130-preview.png"
            className={classes.img}
          />
        </Grid>
      </Grid>
    </Container>
  );
}





// import React from 'react';
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import HeaderAdvance from "../../../components/headers/headerAdvance";


// const useStyles = makeStyles(theme => ({
//   headText: {
//     fontSize: 70,
//     lineHeight: 1.5,
//     letterSpacing: 1,
//     textAlign: "center",
//     wordSpacing: 5
//   },
//   bodyText: {
//     fontSize: 20,
//     lineHeight: 1.5,
//     wordSpacing: 1,
//     textAlign: "center"
//   },
//   img: {
//     width: "100%"
//   }
// }));


// export default function ThemeSection() {
//   const classes = useStyles();
// 	return (
//     <div
//       style={{
//         backgroundImage: "url('/static/images/2784130.jpg')",
//         width: "100%",
//         backgroundAttachment: "fixed",
//         height: "90vh",
//         width: "100%",
//         backgroundPosition: "20% 70%",
//         backgroundRepeat: "no-repeat"
//       }}
//     >
//       <HeaderAdvance />
//       <Container maxWidth="md">
//         <Typography variant="h1" className={classes.headText}>
//           Grow Your Congregation
//         </Typography>

//         <Typography variant="body1" className={classes.bodyText}>
//           Unlimited Themes Selection Unlimited Themes Selection Unlimited Themes
//           Selection Unlimited Themes Selection Unlimited Themes Selection
//           Unlimited Themes Selection Unlimited Themes SelectionUnlimited Themes
//           SelectionUnlimited Themes Selection
//         </Typography>
//       </Container>
//     </div>
//   );
// }
