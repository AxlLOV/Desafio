import { Avatar, Button, Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";

export const CardComponent: React.FC<{}> = () => {
    return (
        <Card>
            <CardContent>
                <Stack>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>AO</Avatar>
                    <Typography>instagram</Typography>
                    <Button variant="contained">Ver perfil</Button>
                </Stack>
            </CardContent>
        </Card>
    )
}