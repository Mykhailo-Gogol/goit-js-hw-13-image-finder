import "./style/style.css";
const debounce = require("debounce");

import references from "./js/references";
import onInputSearch from "./js/on-input-search";

references.input.addEventListener("input", debounce(onInputSearch, 500));
