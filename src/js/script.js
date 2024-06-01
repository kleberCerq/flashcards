var btn = document.getElementById("click-btn");
var cancelBtn = document.getElementById("cancel-btn");
var container = document.getElementById("input-container");

btn.addEventListener("click", function () {
  container.style.display = "block";
  btn.style.display = "none";
});

cancelBtn.addEventListener("click", function () {
  container.style.display = "none";
  btn.style.display = "block";
});

var colorsPalette = document.getElementsByClassName("color-selector");
var colors1 = colorsPalette[0];
var colors2 = colorsPalette[1];

function dropContent() {
  if (colors1.style.display === "grid") {
    colors1.style.display = "none";
  } else {
    colors1.style.display = "grid";
  }
}

function dropContent2() {
  if (colors2.style.display === "grid") {
    colors2.style.display = "none";
  } else {
    colors2.style.display = "grid";
  }
}
