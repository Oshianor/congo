import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";

const offset = 40;
const cardShadow = "0px 14px 80px rgba(34, 35, 58, 0.2)";
const headerShadow = "4px 4px 20px 1px rgba(0, 0, 0, 0.2)";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#F4F6F8",
    position: "relative",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  div: {
		display: "flex",
		flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  root: {
    marginTop: offset,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
    transition: "0.3s",
    boxShadow: cardShadow,
    position: "relative",
    width: 350,
    overflow: "initial",
    background: "#ffffff",
    padding: theme.spacing(2, 0),
    "& .MuiCardHeader-root": {
      flexShrink: 0,
      position: "absolute",
      top: -offset,
      right: 20,
      left: 20,
      borderRadius: theme.spacing(2),
      backgroundColor: purple[500],
      overflow: "hidden",
      boxShadow: headerShadow,
      textAlign: "left",
      "& .MuiCardHeader-title": {
        color: "#ffffff",
        fontWeight: 900,
        letterSpacing: 1
      },
      "& .MuiCardHeader-subheader": {
        color: "#ffffff",
        opacity: 0.87,
        fontWeight: 200,
        letterSpacing: 0.4
      }
    },
    "& .MuiCardContent-root": {
      textAlign: "left",
      "& .MuiCardContent-inner": {
        textAlign: "center",
        // paddingTop: "38px",
        overflowX: "auto"
      }
    }
  },
  imgHead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    padding: theme.spacing(2)
  },
  button: {
    borderRadius: 20
  },
  color: {
    color: red[600],
    fontWeight: "500"
  },
  pricing: {
		margin: theme.spacing(2),
    textAlign: "center"
  }
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.pricing}>
        Pricing
      </Typography>
			<div className={classes.div}>
				<Card className={classes.root}>
					<CardHeader
						className={"MuiCardHeader-root"}
						title={"Pro"}
						// subheader={"Select your favourite"}
						classes={{
							title: "MuiCardHeader-title",
							subheader: "MuiCardHeader-subheader"
						}}
					/>
					<div className={classes.imgHead}>
						<img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" />
					</div>
					<CardContent className={"MuiCardContent-root"}>
						<div className={"MuiCardContent-inner"}>
							<Divider />
							<Typography variant="body1" className={classes.list}>
								App Customization
							</Typography>
							<Divider />
							<Typography
								variant="body1"
								className={clsx(classes.list, classes.color)}
							>
								Limited theme selection
							</Typography>
							<Divider />
							<Typography
								variant="body1"
								className={clsx(classes.list, classes.color)}
							>
								No adminstrative Management support feature
							</Typography>
							<Divider />
							<Typography
								variant="body1"
								className={clsx(classes.list, classes.color)}
							>
								No App features update
							</Typography>
							<Divider />
						</div>
					</CardContent>
					<div className={classes.imgHead}>
						<Button
							size="large"
							variant="outlined"
							color="primary"
							className={classes.button}
						>
							Sign Up
						</Button>
					</div>
				</Card>
				<Card className={classes.root}>
					<CardHeader
						className={"MuiCardHeader-root"}
						title={"Enterprise"}
						// subheader={"Select your favourite"}
						classes={{
							title: "MuiCardHeader-title",
							subheader: "MuiCardHeader-subheader"
						}}
					/>
					<div className={classes.imgHead}>
						<img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" />
					</div>

					<CardContent className={"MuiCardContent-root"}>
						<div className={"MuiCardContent-inner"}>
							<Divider />
							<Typography variant="body1" className={classes.list}>
								App Customization
							</Typography>
							<Divider />
							<Typography variant="body1" className={classes.list}>
								No Limited theme selection
							</Typography>
							<Divider />
							<Typography variant="body1" className={classes.list}>
								Adminstrative Management support feature
							</Typography>
							<Divider />
							<Typography variant="body1" className={classes.list}>
								No App features update
							</Typography>
							<Divider />
						</div>
					</CardContent>
					<div className={classes.imgHead}>
						<Button
							size="large"
							variant="outlined"
							color="primary"
							className={classes.button}
						>
							Sign Up
						</Button>
					</div>
				</Card>
			</div>
    </div>
  );
}
