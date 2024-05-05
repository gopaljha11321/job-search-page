import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        style={{
          padding: "6px 12px",
          borderBottom: "1px solid #3522e2",
          fontFamily: "Lexend",
        }}
      >
        Search jobs
      </Typography>
    </Box>
  );
}
export default Header;
