import fetchImages from "./fetch-images";
import fetchHandler from "./fetch-handler";
import references from "./references";

function onInputSearch(event) {
  event.preventDefault();
  const query = event.target.value;
  const key = "19918904-c3236105177a74f036d1e644e";

  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${1}&per_page=6&key=${key}`;

  references.list.textContent = "";
  if (query) {
    fetchImages(url).then(fetchHandler);
  } else {
    references.list.textContent = "";
    references.loadMoreButton.style.display = "none";
  }
}

export default onInputSearch;
