import React from "react";
import { NavbarComponent } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Grid, Stack } from "@mui/material";

export const LayoutComponent: React.FC<{}> = () => {
    return (
        <Grid height={"100vh"}>
            <NavbarComponent/>
            <Stack direction="column" alignItems="center" justifyContent="center" height={"100%"}>
                <Outlet/>
            </Stack>
        </Grid>
    )
}