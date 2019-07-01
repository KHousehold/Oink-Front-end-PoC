import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    }
});

const Navigation = (props) => {
    const classes = useStyles();

    const handleNavClick = (event) => {
        const link = event.target.innerText.toLocaleLowerCase();
        props.history.push(`/${link}`);
    }

    const getIcon = (text) => {
        switch (text) {
            case 'Home':
                return <HomeIcon />;
                break;
            case 'Expenses':
                return <CashIcon />;
                break;
            case 'Categories':
                return <CategoryIcon />;
                break;
            case 'Dashboard':
                return <DashboardIcon />;
                break;
            case 'About':
                return <AboutIcon />;
                break;
            default:
                break;
        }
    }

    const getNavList = () => {
        return (
            <List>
                {['Home', 'Expenses', 'Categories', 'Dashboard', 'About'].map((text, index) => {
                    return (
                        <ListItem button onClick={handleNavClick} key={index}>
                            <ListItemIcon>{getIcon(text)}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                })}
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
            {getNavList()}
        </Drawer>
    )
}

export default withRouter(Navigation);