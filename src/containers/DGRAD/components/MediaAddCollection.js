import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


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
      <Typography variant="h4" className={classes.header}>
        Create a Media Collection
      </Typography>
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
          label="Label"
          // style={{ margin: 8 }}
          placeholder="Placeholder"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
				<Button variant="outlined" >
					CREATE
				</Button>
      </form>
    </Container>
  );
}
