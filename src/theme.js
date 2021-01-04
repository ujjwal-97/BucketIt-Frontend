import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        height: "32px",
        lineHeight: "32px",
        paddingTop: 0,
        paddingBottom: 0,
      },
      outlined: {
        paddingTop: 0,
        paddingBottom: 0,
      },
      contained: {
        backgroundColor: "#f3f3f3",
        border: "1px solid #dfdfdf",
        "&.Mui-disabled": {
          borderColor: "transparent",
        },
      },
      containedPrimary: {
        backgroundColor: "#1574F6",
        borderColor: "#1574F6",
        "&:hover": {
          backgroundColor: "#150BFA",
          borderColor: "#150BFA",
        },
      },
      outlinedPrimary: {
        borderColor: "#1574F6",
        color: "#1574F6",
        "&:hover": {
          borderColor: "#150BFA",
          color: "#150BFA",
        },
      },
    },
  },
});

export default theme;
