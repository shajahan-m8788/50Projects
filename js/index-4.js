const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchContainer = document.getElementsByClassName("search__container");

searchBtn.addEventListener("click", function () {
  if (searchContainer[0].classList.contains("active")) {
    searchContainer[0].classList.remove("active");
  } else {
    searchInput.focus();
    searchContainer[0].classList.add("active");
  }
});
