function onOpenModal(event) {
  event.preventDefault();

  if (event.target.tagName === "IMG") {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="backdrop"><img src = "${event.target.dataset.large}" alt = "photo" class = "modal"/></div>`
    );
  }
}

export default onOpenModal;
