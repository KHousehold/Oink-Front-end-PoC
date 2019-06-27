import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AboutIcon from '@material-ui/icons/Info';
import CategoryIcon from '@material-ui/icons/ViewList';
import CashIcon from '@material-ui/icons/AttachMoney';
import HomeIcon from '@material-ui/icons/Home';
import { ListItem, Divider, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

export default function Navigation(props) {
    const classes = useStyles();

    function getNavList() {
        return (
            <List>
                <ListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <Link to="/" className={classes.link}>
                        <ListItemText primary={'Home'} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><CashIcon /></ListItemIcon>
                    <Link to="/expenses" className={classes.link}>
                        <ListItemText primary={'Expenses'} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><CategoryIcon /></ListItemIcon>
                    <Link to="/categories" className={classes.link}>
                        <ListItemText primary={'Categories'} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                    <Link to="/dashboard" className={classes.link}>
                        <ListItemText primary={'Dashboard'} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><AboutIcon /></ListItemIcon>
                    <Link to="/about" className={classes.link}>
                        <ListItemText primary={'About'} />
                    </Link>
                </ListItem>
            </List>
        )
    }

    return (
        <Drawer className={classes.drawer}
            anchor="left"
            open={props.open}
            classes={{ paper: classes.drawerPaper }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {getNavList()}
            </List>
        </Drawer>
    )
}

