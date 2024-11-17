const commentsContainer = document.querySelector(".clients-review-bottom");
commentsContainer.addEventListener("wheel", (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault(); // Prevent vertical scroll
    commentsContainer.scrollLeft += event.deltaY; // Apply vertical scroll to horizontal
  }
});
