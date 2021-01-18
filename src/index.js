import "./style/style.css";
const debounce = require("debounce");

import references from "./js/references";
import onInputSearch from "./js/on-input-search";
import onLoadMore from "./js/on-load-more";
import onOpenModal from "./js/on-open-modal";
import onCloseModal from "./js/on-close-modal";

references.input.addEventListener("input", debounce(onInputSearch, 500));

references.loadMoreButton.addEventListener("click", onLoadMore);

references.list.addEventListener("click", onOpenModal);

document.body.addEventListener("click", onCloseModal);
