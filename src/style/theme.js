import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["AvertaCyrillicLight", "sans-serif"].join(),
    fontWeight: 200,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["AvertaCyrillicLight", "sans-serif"].join(),
      },
    },
  },
});

export default theme;
