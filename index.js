var img = document.querySelector(".outpic");
const closeBtn = document.querySelector(".close-btn");
const controlDiv = document.querySelector(".controls-div");
const editorIcon = document.querySelector(".editor-icon");
const imgDiv = document.querySelector(".disp-img");
const imgdiv = document.querySelector(".disp-image");
const flipXBtn = document.querySelector(".flipX-apply");
const flipYBtn = document.querySelector(".flipY-apply");
const borderBtn = document.querySelector(".border-apply");

/*transfrom default values*/

var rotateValue = 0;
var scaleValue = 1;
var skewXValue = 0;
var skewYValue = 0;

/*filter default values*/

var contrastValue = 100;
var grayValue = 0;
var saturateValue = 100;
var blurValue = 0;
var brightValue = 100;
var sepiaValue = 0;

closeBtn.addEventListener("click", function () {
  controlDiv.classList.add("controls-div-inactive");
  controlDiv.classList.remove("controls-div-active");
});
editorIcon.addEventListener("click", function () {
  controlDiv.classList.add("controls-div-active");
  controlDiv.classList.remove("controls-div-inactive");
});

/*Brightness*/

const brightBtn = document.querySelector(".bright-apply");
brightBtn.addEventListener("click", function () {
  var brightInput = document.querySelector(".bright-input");
  var brightVal = brightInput.value;
  brightValue = brightVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
});

/*contrast*/

const contrastBtn = document.querySelector(".contrast-apply");
contrastBtn.addEventListener("click", function () {
  var contrastInput = document.querySelector(".contrast-input");
  var contrastVal = contrastInput.value;
  contrastValue = contrastVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
});

/*Grayscale*/

const grayBtn = document.querySelector(".gray-apply");
grayBtn.addEventListener("click", function () {
  var grayInput = document.querySelector(".gray-input");
  var grayVal = grayInput.value;
  grayValue = grayVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
});

/*blur*/

const blurBtn = document.querySelector(".blur-apply");
blurBtn.addEventListener("click", function () {
  var blurInput = document.querySelector(".blur-input");
  var blurVal = blurInput.value;
  blurValue = blurVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
});

/*sepia*/
const sepiaBtn = document.querySelector(".sepia-apply");
sepiaBtn.addEventListener("click", function () {
  var sepiaInput = document.querySelector(".sepia-input");
  var sepiaVal = sepiaInput.value;
  sepiaValue = sepiaVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
});

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
  console.log(rotateValue);
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*saturation*/

const saturateBtn = document.querySelector(".saturate-apply");
saturateBtn.addEventListener("click", function () {
  var saturateInput = document.querySelector(".saturate-input");
  var saturateVal = saturateInput.value;
  saturateValue = saturateVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)`;
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
  flipXBtn.classList.toggle("flip-selected");
});

flipYBtn.addEventListener("click", function () {
  imgdiv.classList.toggle("flipy");
  flipYBtn.classList.toggle("flip-selected");
});

/*border*/

borderBtn.addEventListener("click", function () {
  const solid = document.querySelector("#solid");
  const dotted = document.querySelector("#dotted");
  const double = document.querySelector("#double");
  const dashed = document.querySelector("#dashed");
  const groove = document.querySelector("#groove");

  var borderWidth = document.querySelector(".border-width-input");
  var borderColor = document.querySelector(".border-color-input");
  var borderRadius = document.querySelector(".radius-input");
  var radius = borderRadius.value;
  var colorVal = borderColor.value;
  var widthVal = borderWidth.value;
  if (solid.checked == true) {
    img.style.borderStyle = "solid";
  } else if (dotted.checked == true) {
    img.style.borderStyle = "dotted";
  } else if (dashed.checked == true) {
    img.style.borderStyle = "dashed";
  } else if (double.checked == true) {
    img.style.borderStyle = "double";
  } else if (groove.checked == true) {
    img.style.borderStyle = "groove";
  } else {
    img.style.borderStyle = "none";
  }
  img.style.borderWidth = `${widthVal}px`;
  img.style.borderColor = colorVal;
  img.style.borderRadius = `${radius}%`;
  console.log(widthVal);
  console.log(colorVal);
  console.log(radius);
});
