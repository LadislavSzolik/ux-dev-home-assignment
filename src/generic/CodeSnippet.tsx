import React from "react";
import { Box, Typography } from "@mui/material";

function CodeSnippet({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        padding: "12px",
        borderRadius: "4px",
      }}
    >
      <Typography variant="code">{children}</Typography>
    </Box>
  );
}
export default CodeSnippet;
