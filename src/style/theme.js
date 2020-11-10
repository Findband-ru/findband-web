import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["AvertaCyrillicLight", "sans-serif"].join(),
    fontWeight: 100,
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
