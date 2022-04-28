import React from 'react'
import { AppBar, IconButton, Toolbar, Typography, Switch as ThemeSwitch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


interface Props {
    handleDrawerToggle: () => void;
    onThemeChange: () => void;
    isDarkMode: boolean;
}
export const AppBarComponent: React.FC<Props> = ({
    handleDrawerToggle, onThemeChange, isDarkMode,
}): JSX.Element => {
    return (
        <AppBar position="static" variant="elevation">
            <Toolbar variant="dense">
                <IconButton color='inherit' onClick={handleDrawerToggle} edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography variant='subtitle1' component="div" sx={{ flexGrow: 1 }}>
                    O'Clever App
                </Typography>
                {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
                <ThemeSwitch size='small' onChange={onThemeChange} color="default" />

            </Toolbar>
        </AppBar>
    )
}

