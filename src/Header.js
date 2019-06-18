import React, {Component} from 'react';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2
    },
    title: {
        flexGrow: 1
    },
    loginButton: {
        position: 'absolute',
        right: 0,
        paddingRight: 24
    },
    toolBar: {
        backgroundColor: '#056571'
    }
});

export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <IconButton edge="start" className={classes.menuButton}
                    color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">Home</Typography>
                    <Button className={classes.loginButton} color="inherit">Login/Register</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}