var setCookie = document.querySelector(".page-counter");
var resetButton = document.querySelector("#reset");
var pageVisitCounter = localStorage.getItem("page_view");

// Check if page_view entry is present
if (pageVisitCounter) {
  pageVisitCounter = Number(pageVisitCounter) + 1;
  localStorage.setItem("page_view", pageVisitCounter);
} else {
  pageVisitCounter = 1;
  localStorage.setItem("page_view", 1);
}
setCookie.innerHTML = pageVisitCounter;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  pageVisitCounter = 1;
  localStorage.setItem("page_view", 1);
  setCookie.innerHTML = pageVisitCounter;
});