//import all json files from this directory aand create a single object  key should be the filename and value should be the json object
import { default as breakpoints } from "./breakpoints";
import { default as misc } from "./misc";
import { default as mixins } from "./mixins";
import { default as palette } from "./palette";
import { default as shadows } from "./shadows";
import { default as shape } from "./shape";
import { default as transitions } from "./transitions";
import { default as typography } from "./typography";
import { default as zIndex } from "./zIndex";

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
