import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
    },
    heroText: {
        width: theme.spacing(40),
    },
}))

function Home() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item sm={8}>
                <Typography variant="h1" component="h5" className={classes.heroText}>Building Website is now {" "}<span style={{color: "EE726F"}}>Easier</span></Typography>
            </Grid>
        </Grid>
    )
}

export default Home
