// Phần tử ô tìm kiếm
const searchInput = document.querySelector("#search-input");

// Focus vào ô tìm kiếm ngay khi trang web tải xong
window.onload = function () {
    searchInput.focus();
};

// Khi nhấn Enter thì chuyển hướng sang trang tìm kiếm của Google
searchInput.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        const input = searchInput.value;
        window.location.href =
            "https://www.google.com/search?q=" +
            input +
            "&oq=" +
            input +
            "&aqs=chrome.0.0i355i433i512j46i433i512j46i131i433i512j46i433i512j0i131i433i512j46i131i433i512j46i131i340i433i512j0i512j0i131i433i512l2.1019j0j9&sourceid=chrome&ie=UTF-8";
    }
});
