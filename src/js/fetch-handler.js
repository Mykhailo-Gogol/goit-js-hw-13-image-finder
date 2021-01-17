import cardTemplate from "../templates/template.hbs";
import references from "./references";
import runInfoNotification from "./notifications";

function fetchHandler(hits) {
  const cardMarkup = cardTemplate(hits);

  if (hits.length > 1) {
    references.list.insertAdjacentHTML("beforeend", cardMarkup);
    references.loadMoreButton.style.display = "block";
  } else {
    runInfoNotification();
  }
}

export default fetchHandler;
