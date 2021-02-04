const editorPanel = document.querySelector(".control-div");
const uploadlink = document.querySelector(".upload-div");
const intro = document.querySelector(".intro");
var outputDiv = document.querySelector("#output");
const controldiv = document.querySelector(".controls-div");

var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
  var x = document.getElementById("output").complete;
};
outputDiv.addEventListener("load", function () {
  uploadlink.style.display = "none";
  controldiv.classList.add("controls-div-active");
  controldiv.classList.remove("controls-div-inactive");
  intro.style.display = "none";
});
