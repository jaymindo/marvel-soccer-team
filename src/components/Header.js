import React from "react";
import logo from "../image/marvel-logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <div className="center">
      <header>
        <Box sx={{ width: "100%", maxWidth: 700, marginTop: "2rem" }}>
          <img src={logo} alt="logo" />
          <Typography variant="h2" component="div" gutterBottom>
            Football Team Builder
          </Typography>
        </Box>
      </header>
    </div>
  );
};

export default Header;
