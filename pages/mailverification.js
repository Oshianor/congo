import React, { Component } from 'react';
import HeaderBasic from "../src/components/headers/headerBasic";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Container } from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
import AppBar from '../src/layouts/Main/components/Topbar/Topbar';
import Toolbar from '@material-ui/core/Toolbar';
// import MainLayout from "../src/layouts/Main";
// import DGI from "../src/containers/DGI/DGI";




const useStyles = theme => ({
    Paper: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 140
    },

    Congrats: {
        marginTop: 50,
        marginBottom: 80
    },
    image: {
        width: 150,
        height: 150
    }
    

});

class EmailVerification extends Component {
	render() {
        const { classes } = this.props;
		return (
            <Container maxWidth='md'>
                <div>
                    <AppBar />
                </div>

                <div>
                <Paper elevation='3' className={classes.Paper}>
                    <div>
                        <img src='/static/images/emailVerify.jpg' className={classes.image}/>
                    </div>
                    <div>
                        <Typography variant='h4' >
                            Email Verified
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='h6' className={classes.Congrats}>
                            Congratulations! Your email has been successfully verified.
                        </Typography>
                    </div>
                </Paper>
                </div>
            </Container>
		);
	}
}

export default withStyles(useStyles)(EmailVerification);