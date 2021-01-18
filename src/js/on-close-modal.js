function onCloseModal(event) {
  event.preventDefault();

  const backdrop = document.querySelector(".backdrop");
  if (event.target === backdrop) {
    document.body.removeChild(backdrop);
  }
}

export default onCloseModal;
