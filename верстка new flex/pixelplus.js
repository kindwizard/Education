var backGroundNum = 1;
const backGroundQuantity = 3;
var sliderTimerId = null;
var buttonTimerId = null;
var currentPage = null;

var rightButton = document.getElementsByClassName("slider-button-right")[0];
var leftButton = document.getElementsByClassName("slider-button-left")[0];
var paginator = document.getElementsByClassName("catalog-cardpaginator")[0];
var feedback = document.getElementsByClassName("feedback-link")[0];
var close = document.getElementsByClassName("feedback-close")[0];

function addBackGroundClass(){
   var curBackGround = document.getElementsByClassName("slider-images")[0];
   curBackGround.classList.add("slider-image" + backGroundNum.toString());
   
}

function killSliderTimer(){
	clearInterval(sliderTimerId);
	sliderTimerId = null;
}

var sliderTimer = function(){
	sliderTimerId = setInterval(changeSlide, 4000);
	buttonTimerId = null;
}

var changeSlide = function(event){
	var curButton = null;	
	if(event != undefined) {
		if(buttonTimerId != null) {
			clearTimeout(buttonTimerId);
			buttonTimerId = null;
		}
		if(sliderTimerId != null) {
			killSliderTimer();
		}
		curButton = event.currentTarget;
	}
	
	var slide = document.getElementsByClassName("slider-images");
	
	if(slide.length > 0)
	{
		slide[0].classList.add("slider-image-fade");
		
		setTimeout(x => {
		if(curButton == null || curButton.classList.contains("slider-button-right")){
			if(slide.length > 0) {
				slide[0].classList.remove("slider-image" + backGroundNum.toString());
				if( backGroundNum < backGroundQuantity) backGroundNum++;
				else backGroundNum = 1;
			}
			else {
				killSliderTimer();
				return;
			}
		}
		else if(curButton.classList.contains("slider-button-left")){
			slide[0].classList.remove("slider-image" + backGroundNum.toString());
			if(backGroundNum > 1) backGroundNum--;
			else backGroundNum = backGroundQuantity;
		}	
		
		addBackGroundClass();
		
		slide[0].classList.remove("slider-image-fade");
		},1000);
		
		if(sliderTimerId === null && buttonTimerId === null) {
			buttonTimerId = setTimeout(sliderTimer, 10000);
		}
	}
	else 
		killSliderTimer();
}

var changePage = function(event){
	var pageElem = event.target;
	var lastElem = null;
	
	if(pageElem.nodeName === "A")
	{
		if(currentPage != null){
			lastElem = event.currentTarget.children[currentPage].children[0];
			lastElem.style.fontSize = null;
			lastElem.style.color = null;
		}	
	
		pageElem.style.fontSize = "18px";
		pageElem.style.color = "#444444";
		currentPage =  parseInt(pageElem.innerHTML) - 1;
	}
}

var displayFeedback = function(){
	let feedbackBlock = document.getElementsByClassName("feedback")[0];
	var feedbackWindow = document.getElementsByClassName("feedback-window")[0];
	feedbackBlock.style.display = "block";
	feedbackWindow.style.opacity = 0;
	close.style.opacity = 0;
	setTimeout(x => {
		feedbackWindow.style = null;
		close.style = null;
		},1000);
}

var feedbackClose = function(){
	let feedbackBlock = document.getElementsByClassName("feedback")[0];	
	feedbackBlock.style = null;	
}

window.onload = sliderTimer;

rightButton.addEventListener("click", changeSlide, false);
leftButton.addEventListener("click", changeSlide, false);
paginator.addEventListener("click", changePage, false);
feedback.addEventListener("click", displayFeedback, false);
close.addEventListener("click", feedbackClose, false);

addBackGroundClass();