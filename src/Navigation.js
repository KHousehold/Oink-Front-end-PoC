import React, {Component, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Devider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

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

    return(
        <Drawer className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{paper: classes.drawerPaper}}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Devider/>
        </Drawer>
    )
}

