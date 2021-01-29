import fetchImages from "./fetch-images";
import fetchHandler from "./fetch-handler";
import references from "./references";
const throttle = require("lodash.throttle");

let page = 1;

function onLoadMore() {
  references.loadMoreButton.classList.add("load-animation");

  const query = references.input.value;
  const key = "19918904-c3236105177a74f036d1e644e";
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${(page += 1)}&per_page=6&key=${key}`;

  setTimeout(() => {
    fetchImages(url)
      .then(fetchHandler)
      .finally(() => {
        const outputRef = document.querySelector(".gallery");
        const { y } = outputRef.getBoundingClientRect();
        console.log(y);
        throttle(
          window.scrollTo({
            top: document.documentElement.clientHeight - y - 150,
            behavior: "smooth",
          })
        );
      });

    references.loadMoreButton.classList.remove("load-animation");
  }, 2000);
}

export default onLoadMore;
