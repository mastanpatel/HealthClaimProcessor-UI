import React, { useState } from 'react';
import './App.css';
import { createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { AppBarComponent, SideBar } from './components';


export const App: React.FC = (): JSX.Element => {

  const [ThemeMode, setThemeMode] = useState<"light" | "dark">("dark")
  const [sideBarToggle, setsideBarToggle] = useState(true)

  const theme = createTheme({
    palette: {
      mode: ThemeMode,
    },
    typography: {
      fontSize: 18,
    },
  });

  const handleDrawerToggle = React.useCallback(() => {
    //toggle drawer here
    setsideBarToggle(!sideBarToggle);
  }, [sideBarToggle])

  const onThemeChange = React.useCallback(() => {
    //toggle theme here
    setThemeMode(ThemeMode === "dark" ? "light" : "dark")
  }, [ThemeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBarComponent
          handleDrawerToggle={handleDrawerToggle}
          onThemeChange={onThemeChange}
          isDarkMode={ThemeMode === "dark"}
        />
        <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} />
      </CssBaseline>
    </ThemeProvider>
  );
};

