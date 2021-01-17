import "./style/style.css";
const debounce = require("debounce");

import references from "./js/references";
import onInputSearch from "./js/on-input-search";
import onLoadMore from "./js/on-load-more";

references.input.addEventListener("input", debounce(onInputSearch, 500));

references.loadMoreButton.addEventListener("click", onLoadMore);
