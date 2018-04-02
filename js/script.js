var searchButton = document.querySelector("button.search");
var shortSearch = document.querySelector(".short-search");
var arrivalDate = document.querySelector(".arr-date");
var departureDate = document.querySelector(".dep-date");
var amountAdults = document.querySelector(".ad-am");
var amountChildren = document.querySelector(".ch-am");
 
searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  shortSearch.classList.toggle("short-search-open");
});

shortSearch.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !amountAdults.value || !amountChildren.value) {
    evt.preventDefault();
  }
});

