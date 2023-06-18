function search() {
  const input = searchInput.value;

  window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome.0.0i355i433i512j46i433i512j46i131i433i512j46i433i512j0i131i433i512j46i131i433i512j46i131i340i433i512j0i512j0i131i433i512l2.1019j0j9&sourceid=chrome&ie=UTF-8";
}

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    search();
  }
});
