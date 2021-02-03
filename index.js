const closeBtn = document.querySelector('.close-btn');
const controlDiv = document.querySelector('.controls-div');
const editorIcon = document.querySelector('.editor-icon');

closeBtn.addEventListener('click',function(){
    controlDiv.classList.add("controls-div-inactive");
    controlDiv.classList.remove("controls-div-active");
});
editorIcon.addEventListener('click',function(){
    controlDiv.classList.add("controls-div-active");
    controlDiv.classList.remove("controls-div-inactive");
});
