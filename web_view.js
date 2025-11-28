let grid_icon = document.querySelector("#grid_view");
let list_icon = document.querySelector("#list_view");
let filter = document.querySelector(".content_filter");
let manufacture = document.querySelector(".manufacturer_block");
let gridView = document.querySelector(".grid_view");
let listView = document.querySelector(".list_view");
let contentPages = document.querySelector(".content_pages");



// Grid View

grid_icon.addEventListener("click", () => {
    console.log("clicked");

    grid_icon.style.backgroundColor = "#EFF2F4";
    list_icon.style.backgroundColor = "#FFFFFF";
    filter.style.display = "block";
    manufacture.style.display = "block";
    gridView.style.display = "block";
    listView.style.display = "none";
    contentPages.style.paddingBottom = "7rem";
});

// Grid View


list_icon.addEventListener("click", () => {
    console.log("clicked");

    list_icon.style.backgroundColor = "#EFF2F4";
    grid_icon.style.backgroundColor = "#FFFFFF";
    filter.style.display = "none";
    manufacture.style.display = "none";
    gridView.style.display = "none";
    listView.style.display = "block";
    contentPages.style.paddingBottom = "0rem";
});