function fetchImages(searchQuery) {
  return fetch(searchQuery)
    .then((res) => res.json())
    .then(({ hits }) => hits)
    .catch((error) => console.log(error));
}

export default fetchImages;
