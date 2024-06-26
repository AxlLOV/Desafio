import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

export const NavbarComponent: React.FC<{}> = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color="warning" position="sticky">
                <Toolbar>
                    <Container>
                        <Grid container>
                            <Grid item>
                                <Typography color="secondary" variant="h5">Desafiogram</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}