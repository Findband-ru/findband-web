import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["AvertaCyrillicBlack", "sans-serif"].join(),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["AvertaCyrillicBlack", "sans-serif"].join(),
      },
    },
  },
});

export default theme;
