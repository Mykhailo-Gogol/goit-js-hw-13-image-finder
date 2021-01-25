import cardTemplate from "../templates/template.hbs";
import references from "./references";
import runInfoNotification from "./notifications";
import io from "./observer";

function fetchHandler(hits) {
  const cardMarkup = cardTemplate(hits);
  hits.forEach(({ tags }) => {
    console.log(tags);
  });

  if (hits.length > 0) {
    references.list.insertAdjacentHTML("beforeend", cardMarkup);
    references.loadMoreButton.style.display = "block";

    // Підключає Observer
    if (references.loadMoreButton) {
      io.observe(references.loadMoreButton);
    }
  } else {
    runInfoNotification();
  }
}

export default fetchHandler;
