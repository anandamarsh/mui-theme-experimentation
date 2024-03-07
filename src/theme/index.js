import { createTheme } from "@mui/material/styles";
import horizontal from "./horizontal";
import vertical from "./vertical";

const clarityThemeJson = {
  ...horizontal,
  ...vertical,
};
const clarityTheme = createTheme(clarityThemeJson);
const noTheme = createTheme({});

export { clarityThemeJson, clarityTheme, noTheme };
