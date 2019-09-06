import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";



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
  formControl: {
    width: "100%"
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

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h4" className={classes.header}>
        Create a Support Ticket
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-password-input"
          label="Title"
          // className={classes.textField}
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
            Age
          </InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            input={
              <OutlinedInput
                fullWidth
                labelWidth={labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-full-width"
          label="Label"
          rows={4}
          // style={{ margin: 8 }}
          placeholder="Placeholder"
          // helperText="Full width!"
          fullWidth
          margin="dense"
          // variant="outlined"
          multiline
          rowsMax="10"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Button variant="outlined">CREATE</Button>
      </form>
    </Container>
  );
}
