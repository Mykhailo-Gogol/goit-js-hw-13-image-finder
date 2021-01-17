import fetchImages from "./fetch-images";
import fetchHandler from "./fetch-handler";
import references from "./references";

let page = 1;

function onLoadMore(event) {
  event.preventDefault();
  const query = references.input.value;
  const key = "19918904-c3236105177a74f036d1e644e";
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${(page += 1)}&per_page=12&key=${key}`;

  function scroll() {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 300);
  }

  fetchImages(url).then(fetchHandler);

  scroll();
}

export default onLoadMore;
