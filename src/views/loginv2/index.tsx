import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export const Loginv2Page: React.FC<{}> = () => {
    return (
       <Grid container direction="row" justifyContent="space-arround" alignItems="center">
            <img src={"https://opsg-img-cdn-gl.heytapimg.com/epb/202402/20/VYh23XynbefcMeYT.png"} style={{ width: "40%", marginLeft: "20vh"}} />
            <Paper elevation={1} sx={{ padding: "1.3em", minWidth: "40vh", maxWidth: "60vh", ml: "20vh" }}>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h4">Desafiogram</Typography>
                    <Typography color="secondary">Registrate para que veas el clon de instagram</Typography>
                    <TextField
                        sx={{ mt: 1.5, mb: 1 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="email"
                        variant="filled"
                        fullWidth
                        required
                        size="small"
                        type="email"
                    />
                    <TextField
                        sx={{ mt: 1.5, mb: 1.5 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="name"
                        variant="filled"
                        fullWidth
                        required
                        size="small"
                    />
                    <TextField
                        sx={{ mt: 1.5, mb: 1.5 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="username"
                        variant="filled"
                        fullWidth
                        required
                        size="small"
                    />
                    <TextField
                        sx={{ mt: 1.5, mb: 1.5 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="bio"
                        variant="filled"
                        fullWidth
                        required
                        size="small"
                    />
                    <TextField
                        sx={{ mt: 1.5, mb: 1.5 }}
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder="password"
                        variant="filled"
                        fullWidth
                        required
                        type="password"
                        size="small"
                    />
                    <Button variant="contained" type="submit">Login</Button>
                    <Typography color="secondary">¿No tienes una cuenta?</Typography>
                    <Typography color="secondary">Signup</Typography>
                </Grid>
            </Paper>
       </Grid> 
    )
}