import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#EF5742" }} position="static">
        <Toolbar variant="dense">
          <Typography variant="h5" color="inherit" component="div">
            Awesome Guestbook
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Appbar;
