import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import Navigation from './Navigation';

const navWidth = 240;
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    menuButton: {
        marginRight: 2
    },
    title: {
        flexGrow: 1
    },
    buttonContainer: {
        position: 'absolute',
        right: 0,
        marginRight: 24
    },
    toolBar: {
        backgroundColor: '#056571'
    },
    accountButton: {
        position: 'absolute',
        right: 0,
        marginRight: 24
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState();
    const [authorized, setAuth] = useState(false);

    function handleOpenNav() {
        setOpen(true);
    }

    function handleCloseNav() {
        setOpen(false);
    }

    function getButtons() {
        if (!authorized) {
            return (
                <div className={classes.buttonContainer}>
                    <Button color="inherit">
                        <Link to="/login" className={classes.link}>Login</Link>
                    </Button>
                    <Button color="inherit">
                        <Link to="/register" className={classes.link}>Register</Link>
                    </Button>
                </div>
            )
        } else {
            return (
                <IconButton className={classes.accountButton} color="inherit">
                    <AccountIcon />
                </IconButton>
            )
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    <IconButton edge="start" className={classes.menuButton}
                        color="inherit" aria-label="Menu" onClick={handleOpenNav}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Home</Typography>
                    {getButtons()}
                </Toolbar>
            </AppBar>
            <Navigation open={open} handleClose={handleCloseNav}></Navigation>
        </div>
    )
}