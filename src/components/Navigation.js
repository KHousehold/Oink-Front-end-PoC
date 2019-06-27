import React, { Component, useState } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AboutIcon from '@material-ui/icons/Info';
import CategoryIcon from '@material-ui/icons/ViewList';
import CashIcon from '@material-ui/icons/AttachMoney';
import { ListItem, Divider, ListItemIcon, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    }
});

export default function Navigation(props) {
    const classes = useStyles();

    function getNavList() {
        return (
            <List>
                <Route render={({ history }) => (
                    <ListItem button onClick={() => { history.push(`/expenses`) }}>
                        <ListItemIcon><CashIcon /></ListItemIcon>
                        <ListItemText primary={'Expenses'} />
                    </ListItem>
                )} />
                <Route render={({ history }) => (
                    <ListItem button onClick={() => { history.push(`/categories`) }}>
                        <ListItemIcon><CategoryIcon /></ListItemIcon>
                        <ListItemText primary={'Categories'} />
                    </ListItem>
                )} />
                <Route render={({ history }) => (
                    <ListItem button onClick={() => { history.push(`/dashboard`) }}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItem>
                )} />
                <Route render={({ history }) => (
                    <ListItem button onClick={() => { history.push(`/about`) }}>
                        <ListItemIcon><AboutIcon /></ListItemIcon>
                        <ListItemText primary={'About'} />
                    </ListItem>
                )} />
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
                {/* {['Expenses', 'Categories', 'Dashboard', 'About'].map((text, index) => {
                    let iconName = `${text}Icon`;
                    return (
                        <Route key={index} render={({ history }) => (
                            <ListItem button key={text} onClick={() => { history.push(`/${text.toLowerCase()}`) }}>
                                <ListItemText primary={text} />
                                <ListItemIcon></ListItemIcon>
                            </ListItem>
                        )} />
                    )
                })} */}
            </List>
        </Drawer>
    )
}

