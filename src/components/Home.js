import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const image = require('../resources/piggy_bank.png');

const useStyles = makeStyles({
    homeContainer: {
        backgroundColor: '#fa9a91',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    welcome: {
        textAlign: 'center',
        position: 'relative',
        top: '80px'
    },
    image: {
        position: 'absolute',
        width: '40%',
        height: '555px',
        right: '425px',
        top: '180px'
    }
})

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.homeContainer}>
            <Typography variant="h1" className={classes.welcome}> Welcome to Oink!</Typography>
            <CardMedia className={classes.image} component="img"
                height="200"
                image={image}
            />
        </div>
    )
}