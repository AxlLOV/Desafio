import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import React from "react";

export const LoginPage: React.FC<{}> = () => {
    return (
        <Paper elevation={1} sx={{ padding: "1.3em", minWidth: "40vh", maxWidth: "50vh" }}>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h4">Desafiogram</Typography>
                    <TextField
                        sx={{ mt: 1.5, mb: 1 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="username"
                        variant="filled"
                        fullWidth
                        size="small"
                        required
                    />
                    <TextField
                        sx={{ mt: 1.5, mb: 1.5 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="password"
                        variant="filled"
                        fullWidth
                        type="password"
                        size="small"
                        required
                    />
                    <Button variant="contained" type="submit">Sign up</Button>
                    <Typography color="secondary">¿Ya tienes cuenta?</Typography>
                    <Typography color="secondary">Login</Typography>
            </Grid>
        </Paper>
    )
}