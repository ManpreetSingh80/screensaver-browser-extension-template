const {
  colors,
  createMuiTheme,

} = MaterialUI;
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d84315',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#fff',
    },
  }
});
