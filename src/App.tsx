import React from "react";
import { Grid } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./appTheme";
import HelpCard from "./features/gcloudCommand/HelpCard";
import OrganizationIdSnippet from "./features/gcloudCommand/OrganizationIdSnippet";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Grid
        container
        spacing={{ xs: 2, md: 4, lg: 7 }}
        p={{ xs: 4, md: 8, lg: 12 }}
      >
        <Grid item xs={12} md={8}>
          <OrganizationIdSnippet />
        </Grid>
        <Grid item xs={12} md={4}>
          <HelpCard />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
