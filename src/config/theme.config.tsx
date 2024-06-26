import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

const theme = createTheme({
    palette: {
      secondary: {
        main: '#757575',
      },
      info: {
        main: '#9c27b0',
      },
      warning: {
        main: '#fffff',
      }
    },
  });

export const ThemeConfig: React.FC<ThemeProp> = ({children}) =>{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}