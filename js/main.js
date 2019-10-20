/* Bind DOM elements */
const filterInput = document.querySelector(".filter-input");
const filterList = document.querySelector(".filter-list");
const listItems = document.querySelectorAll(".filter-list li");
const addMovieInput = document.querySelector(".add-movie-input");

/* Add List Item */
addMovieInput.addEventListener("change", function(evt) {
  const value = evt.target.value;
  const newItem = document.createElement("li");
  newItem.classList.add("new-item");
  newItem.textContent = value;
  if (addMovieInput.value !== "") {
    filterList.appendChild(newItem);
    addMovieInput.value = "";
  } else {
    return null;
  }
});

/* Filter List Items */
filterInput.addEventListener("keyup", function(evt) {
  const searchTerm = evt.target.value.toLowerCase();
  Array.from(listItems).forEach(function(title) {
    const singleTitle = title.firstElementChild.textContent;
    if (singleTitle.toLowerCase().includes(searchTerm)) {
      title.style.display = "block";
    } else {
      title.style.display = "none";
    }
  });
});
