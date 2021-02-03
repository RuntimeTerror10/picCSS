const closeBtn = document.querySelector(".close-btn");
const controlDiv = document.querySelector(".controls-div");
const editorIcon = document.querySelector(".editor-icon");
const imgDiv = document.querySelector(".disp-img");
const imgdiv = document.querySelector(".disp-image");
const flipXBtn = document.querySelector(".flipX-apply");
const flipYBtn = document.querySelector(".flipY-apply");

var rotateValue = 0;
var scaleValue = 1;
var skewXValue = 0;
var skewYValue = 0;

closeBtn.addEventListener("click", function () {
  controlDiv.classList.add("controls-div-inactive");
  controlDiv.classList.remove("controls-div-active");
});
editorIcon.addEventListener("click", function () {
  controlDiv.classList.add("controls-div-active");
  controlDiv.classList.remove("controls-div-inactive");
});
var img = document.querySelector(".outpic");
/*opacity*/
const opacityBtn = document.querySelector(".opacity-apply");
opacityBtn.addEventListener("click", function () {
  var opacityInput = document.querySelector(".opacity-input");
  var opVal = opacityInput.value;
  console.log(opVal);
  img.style.opacity = opVal;
});
/*rotate*/
const rotateBtn = document.querySelector(".rotate-apply");
rotateBtn.addEventListener("click", function () {
  var rotateInput = document.querySelector(".rotate-input");
  var rotateVal = rotateInput.value;
  rotateValue = rotateVal;
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*scale*/

const scaleBtn = document.querySelector(".scale-apply");
scaleBtn.addEventListener("click", function () {
  var scaleInput = document.querySelector(".scale-input");
  var scaleVal = scaleInput.value;
  scaleValue = scaleVal;
  console.log(scaleValue);
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*skewX*/
const skewxBtn = document.querySelector(".skewx-apply");
skewxBtn.addEventListener("click", function () {
  var skewxInput = document.querySelector(".skewx-input");
  var skewxVal = skewxInput.value;
  skewXValue = skewxVal;
  console.log(skewXValue);
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*skewY*/
const skewyBtn = document.querySelector(".skewy-apply");
skewyBtn.addEventListener("click", function () {
  var skewyInput = document.querySelector(".skewy-input");
  var skewyVal = skewyInput.value;
  skewYValue = skewyVal;
  console.log(skewYValue);
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*flip*/
flipXBtn.addEventListener("click", function () {
  imgDiv.classList.toggle("flipx");
  flipXBtn.style.background = "#92920b";
});

flipYBtn.addEventListener("click", function () {
  imgdiv.classList.toggle("flipy");
  flipYBtn.style.background = "#92920b";
});
