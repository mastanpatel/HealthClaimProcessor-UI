import React from 'react'
import { Divider, Drawer, IconButton, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Props {
    isOpen: boolean;
    handleDrawerToggle: () => void;
}

const DRAWER_WIDTH = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}))

const LogoStyled = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}))

export const SideBar: React.FC<Props> = ({
    isOpen,
    //children,
    handleDrawerToggle,
}): JSX.Element => {

    const theme = useTheme();
    return (
        <>
            <Drawer
                sx={{
                    width: DRAWER_WIDTH,
                    flexShrink: 0,
                    "& .MUIDrawer-paper": {
                        width: DRAWER_WIDTH,
                        boxSizing: "border-box",
                    }
                }}
                variant="persistent"
                anchor="left"
                open={isOpen} >
                <DrawerHeader>
                    <LogoStyled>
                        <Typography variant='subtitle2' component="div" align="left">
                            O'Clever
                        </Typography>
                    </LogoStyled>
                    <IconButton onClick={handleDrawerToggle}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
            </Drawer>
        </>
    )
}
