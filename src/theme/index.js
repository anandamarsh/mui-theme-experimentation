import { createTheme } from "@mui/material/styles";
import horizontal from "./horizontal";
import vertical from "./vertical";

const clarityTheme = createTheme({
  ...horizontal,
  ...vertical,
});

const noTheme = createTheme({});

export { clarityTheme, noTheme };
