import "./style/style.css";
const debounce = require("debounce");
const throttle = require("lodash.throttle");

import references from "./js/references";
import onInputSearch from "./js/on-input-search";
import onOpenModal from "./js/on-open-modal";
import onCloseModal from "./js/on-close-modal";

references.input.addEventListener("input", debounce(onInputSearch, 500));

references.list.addEventListener("click", onOpenModal);

document.body.addEventListener("click", onCloseModal);

references.lickBack.addEventListener(
  "click",
  throttle(() => {
    window.scrollTo(0, 0);
  }, 1000)
);
