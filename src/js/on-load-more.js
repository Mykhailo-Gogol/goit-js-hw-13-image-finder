import fetchImages from "./fetch-images";
import fetchHandler from "./fetch-handler";
import references from "./references";

let page = 1;

function onLoadMore(event) {
  event.preventDefault();
  const query = references.input.value;
  const key = "19918904-c3236105177a74f036d1e644e";
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${(page += 1)}&per_page=12&key=${key}`;

  if (query) {
    return fetchImages(url).then(fetchHandler);
  }
}

export default onLoadMore;
