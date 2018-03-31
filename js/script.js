var searchButton = document.querySelector("button.search");
var shortSearch = document.querySelector(".short-search");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  shortSearch.classList.toggle("short-search-open");
});
