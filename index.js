const closeBtn = document.querySelector('.close-btn');
const controlDiv = document.querySelector('.controls-div');
const editorIcon = document.querySelector('.editor-icon');

var rotateValue = 0;
var scaleValue = 1;

closeBtn.addEventListener('click',function(){
    controlDiv.classList.add("controls-div-inactive");
    controlDiv.classList.remove("controls-div-active");
});
editorIcon.addEventListener('click',function(){
    controlDiv.classList.add("controls-div-active");
    controlDiv.classList.remove("controls-div-inactive");
});
var img = document.querySelector('.outpic');
/*opacity*/
const opacityBtn = document.querySelector('.opacity-apply');
opacityBtn.addEventListener('click',function(){
var opacityInput = document.querySelector('.opacity-input');
var opVal = opacityInput.value;
console.log(opVal);
img.style.opacity=opVal;
});
/*rotate*/
const rotateBtn = document.querySelector('.rotate-apply');
rotateBtn.addEventListener('click',function(){
var rotateInput = document.querySelector('.rotate-input');
var rotateVal = rotateInput.value;
rotateValue = rotateVal;
img.style.transform=`rotate(${rotateVal}deg)scale(${scaleValue})`;
});
const scaleBtn = document.querySelector('.scale-apply');
scaleBtn.addEventListener('click',function(){
var scaleInput = document.querySelector('.scale-input');
var scaleVal = scaleInput.value;
scaleValue = scaleVal;
console.log(scaleValue);
img.style.transform=`rotate(${rotateValue}deg)scale(${scaleVal})`;
});