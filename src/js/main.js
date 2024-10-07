import * as functions from "./files/functions.js";

import "@scss/style.scss";
import burger from "./files/burger.js";
import slider from "./files/slider.js";
import anchor from "./files/anchor.js";
import modal from "./files/modal.js";
import password from "./files/password.js";
import tab from "./files/tab.js";

functions.isWebp();
functions.mediaAdaptive();
burger();
slider();
anchor();
modal();
password();
tab();