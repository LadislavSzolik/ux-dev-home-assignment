import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    code: React.CSSProperties;
    body2Link: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    code?: React.CSSProperties;
    body2Link?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    code: true;
    body2Link: true;
  }
}

const appTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FAFAFA",
          padding: "8px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px",
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    h4: {
      fontSize: 18,
      lineHeight: "26px",
      fontStyle: "normal",
      fontWeight: 500,
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0.1px",
    },
    body2: {
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0.15px",
    },
    body2Link: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.15px",
      display: "flex",
      alignItems: "center",
    },
    code: {
      fontSize: 14,
      lineHeight: "18px",
      fontFamily: "Roboto Mono",
    },
  },
});

export default appTheme;
