import DesignTokens from "../DesignTokens";

const configuration = {
  mode: "light",
  common: {
    black: "#000",
    white: "#fff",
  },
  primary: {
    main: "#0971F1",
    light: "#3996F9",
    dark: "#0059D6",
    contrastText: "#fff",
  },
  secondary: {
    main: "#607590",
    light: "#677D98",
    dark: "#586B84",
    contrastText: "#fff",
  },
  error: {
    main: "#E70848",
    light: "#F63761",
    dark: "#CA073E",
    contrastText: "#fff",
  },
  warning: {
    main: "#E08500",
    light: "#E69D33",
    dark: "#CA073E",
    contrastText: "#fff",
  },
  info: {
    main: "#007AC5",
    light: "#1AB4FF",
    dark: "#004982",
    contrastText: "#fff",
  },
  success: {
    main: "#008571",
    light: "#00A385",
    dark: "#00705F",
    contrastText: "#fff",
  },
  grey: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#F5F5F5",
    A200: "#EEEEEE",
    A400: "#BDBDBD",
    A700: "#616161",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: "rgba(27, 31, 40, 1)",
    secondary: "rgba(27, 31, 40, 0.6)",
    disabled: "rgba(27, 31, 40, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fff",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export default configuration;
