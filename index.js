var img = document.querySelector(".outpic");
const closeBtn = document.querySelector(".close-btn");
const controlDiv = document.querySelector(".controls-div");
const editorIcon = document.querySelector(".editor-icon");
const imgDiv = document.querySelector(".disp-img");
const imgdiv = document.querySelector(".disp-image");
const flipXBtn = document.querySelector(".flipX-apply");
const flipYBtn = document.querySelector(".flipY-apply");
const borderBtn = document.querySelector(".border-apply");
const resetBtn = document.querySelector(".reset");

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
var hueValue = 0;
var invertValue = 0;
var opacityValue = 1;

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
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*contrast*/

const contrastBtn = document.querySelector(".contrast-apply");
contrastBtn.addEventListener("click", function () {
  var contrastInput = document.querySelector(".contrast-input");
  var contrastVal = contrastInput.value;
  contrastValue = contrastVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*saturation*/

const saturateBtn = document.querySelector(".saturate-apply");
saturateBtn.addEventListener("click", function () {
  var saturateInput = document.querySelector(".saturate-input");
  var saturateVal = saturateInput.value;
  saturateValue = saturateVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*Grayscale*/

const grayBtn = document.querySelector(".gray-apply");
grayBtn.addEventListener("click", function () {
  var grayInput = document.querySelector(".gray-input");
  var grayVal = grayInput.value;
  grayValue = grayVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*blur*/

const blurBtn = document.querySelector(".blur-apply");
blurBtn.addEventListener("click", function () {
  var blurInput = document.querySelector(".blur-input");
  var blurVal = blurInput.value;
  blurValue = blurVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*invert*/

const invertBtn = document.querySelector(".invert-apply");
invertBtn.addEventListener("click", function () {
  var invertInput = document.querySelector(".invert-input");
  var invertVal = invertInput.value;
  invertValue = invertVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*sepia*/

const sepiaBtn = document.querySelector(".sepia-apply");
sepiaBtn.addEventListener("click", function () {
  var sepiaInput = document.querySelector(".sepia-input");
  var sepiaVal = sepiaInput.value;
  sepiaValue = sepiaVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*Hue*/

const hueBtn = document.querySelector(".hue-apply");
hueBtn.addEventListener("click", function () {
  var hueInput = document.querySelector(".hue-input");
  var hueVal = hueInput.value;
  hueValue = hueVal;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});

/*opacity*/

const opacityBtn = document.querySelector(".opacity-apply");
opacityBtn.addEventListener("click", function () {
  var opacityInput = document.querySelector(".opacity-input");
  var opVal = opacityInput.value;
  opacityValue = opVal;
  img.style.opacity = opacityValue;
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
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*skewX*/

const skewxBtn = document.querySelector(".skewx-apply");
skewxBtn.addEventListener("click", function () {
  var skewxInput = document.querySelector(".skewx-input");
  var skewxVal = skewxInput.value;
  skewXValue = skewxVal;
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
});

/*skewY*/

const skewyBtn = document.querySelector(".skewy-apply");
skewyBtn.addEventListener("click", function () {
  var skewyInput = document.querySelector(".skewy-input");
  var skewyVal = skewyInput.value;
  skewYValue = skewyVal;
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
});

/*reset*/
resetBtn.addEventListener("click", function () {
  imgDiv.classList.toggle("flipx");
  flipXBtn.classList.toggle("flip-selected");
  imgdiv.classList.toggle("flipy");
  flipYBtn.classList.toggle("flip-selected");
  rotateValue = 0;
  var rotateinput = (document.querySelector(
    ".rotate-input"
  ).value = rotateValue);

  scaleValue = 1;
  var scaleinput = (document.querySelector(".scale-input").value = scaleValue);

  skewXValue = 0;
  var skewxinput = (document.querySelector(".skewx-input").value = skewXValue);

  skewYValue = 0;
  var skewyinput = (document.querySelector(".skewy-input").value = skewYValue);

  contrastValue = 100;
  var contrastinput = (document.querySelector(
    ".contrast-input"
  ).value = contrastValue);

  grayValue = 0;
  var grayinput = (document.querySelector(".gray-input").value = grayValue);

  saturateValue = 100;
  var saturateinput = (document.querySelector(
    ".saturate-input"
  ).value = saturateValue);

  blurValue = 0;
  var blurinput = (document.querySelector(".blur-input").value = blurValue);

  brightValue = 100;
  var brightinput = (document.querySelector(
    ".bright-input"
  ).value = brightValue);

  sepiaValue = 0;
  var sepiainput = (document.querySelector(".sepia-input").value = sepiaValue);

  hueValue = 0;
  var hueinput = (document.querySelector(".hue-input").value = hueValue);

  invertValue = 0;
  var invertinput = (document.querySelector(
    ".invert-input"
  ).value = invertValue);

  opacityValue = 1;
  var opacityinput = (document.querySelector(
    ".opacity-input"
  ).value = opacityValue);

  img.style.opacity = opacityValue;
  img.style.transform = `rotate(${rotateValue}deg)scale(${scaleValue})skewX(${skewXValue}deg)skewY(${skewYValue}deg)`;
  img.style.filter = `contrast(${contrastValue}%)grayscale(${grayValue}%)saturate(${saturateValue}%)blur(${blurValue}px)brightness(${brightValue}%)sepia(${sepiaValue}%)hue-rotate(${hueValue}deg)invert(${invertValue}%)`;
});
