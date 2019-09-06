import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import "../../../../static/css/editor.css";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  header: {
    lineHeight: 4,
		color: "white",
		textTransform: "uppercase"
  }
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" className={classes.header}>
            Add an Event
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained">Publish & Save</Button>
          <Button variant="outlined">Save</Button>
        </Grid>
      </Grid>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-password-input"
          label="Password"
          // className={classes.textField}
          type="password"
          fullWidth
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Detail"
          // style={{ margin: 8 }}
          placeholder="Placeholder"
          // helperText="Full width!"
          multiline
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Editor
          // editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="demo-wrapper"
          // editorClassName="demo-editor"
          editorClassName="demo-editor-custom"
          // onEditorStateChange={this.onEditorStateChange}
        />
      </form>
    </Container>
  );
}
