import React from 'react';
import "../../../../static/css/features.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const Features = () => { 
	return (
    <div style={{ backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Grid container justify="center" alignItems="center" spacing={16}>
          <Grid item xs={12} sm={3}>
            <Paper elevation={0}>
              <Typography variant="h4">Create An App</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            dd
          </Grid>
          <Grid item xs={12} sm={3}>
            dd
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;


// style={{ display: "flex", justifyContent: "center" }}