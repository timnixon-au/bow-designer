import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography
} from '@material-ui/core';

const AppHeader = () => (
    <AppBar position="static">
        <toolbar>
            <Typography variant="h6" color="inherit" align="center">
                Bow Designer
            </Typography>
        </toolbar>
    </AppBar>
);

export default AppHeader;