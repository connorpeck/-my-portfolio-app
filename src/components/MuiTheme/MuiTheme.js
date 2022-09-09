import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Delmon Delicate",
  },
  palette: {
    primary: { main: "#3A606E" },
    secondary: { main: "#fcf1d296" },
  },
});

export default theme;
