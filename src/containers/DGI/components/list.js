import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setBeneficiaryType } from "../../../actions/data";
import Grow from "@material-ui/core/Grow";


const useStyles = makeStyles(theme => ({
  root: {
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center"
  },
  container: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: theme.palette.background.paper
  },
  headline: {
		textAlign: "center",
		margin: theme.spacing(2)
  }
}));

function SimpleList(props) {
  const classes = useStyles();
	const { setBeneficiaryType } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.headline}>
        Select Beneficiary Type
      </Typography>
      <Grow in={true}>
        <div className={classes.container}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={() => setBeneficiaryType("Self")}>
              <ListItemAvatar>
                <Avatar alt="self" src="/static/images/self-esteem.svg" />
              </ListItemAvatar>
              <ListItemText primary="Self" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setBeneficiaryType("Third Party")}>
              <ListItemAvatar>
                <Avatar alt="Third Party" src="/static/images/podium.svg" />
              </ListItemAvatar>
              <ListItemText primary="Third Party" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setBeneficiaryType("Multiple")}>
              <ListItemAvatar>
                <Avatar alt="Multiple" src="/static/images/group-avatar.svg" />
              </ListItemAvatar>
              <ListItemText primary="Multiple" />
            </ListItem>
          </List>
        </div>
      </Grow>
    </div>
  );
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setBeneficiaryType: setBeneficiaryType,
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(SimpleList);