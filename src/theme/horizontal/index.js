//import all json files from this directory aand create a single object  key should be the filename and value should be the json object
import { default as breakpoints } from "./breakpoints.json";
import { default as misc } from "./misc.json";
import { default as mixins } from "./mixins.json";
import { default as palette } from "./palette.json";
import { default as shadows } from "./shadows.json";
import { default as shape } from "./shape.json";
import { default as transitions } from "./transitions.json";
import { default as typography } from "./typography.json";
import { default as zIndex } from "./zIndex.json";

const horizontal = {
  breakpoints,
  mixins,
  palette,
  shadows,
  shape,
  transitions,
  typography,
  zIndex,
  ...misc,
};

export default horizontal;
