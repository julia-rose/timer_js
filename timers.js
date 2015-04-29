var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var pauseButton = document.getElementById("pause");

var timeElapsed = 1;
var IntervalId;

function timeGoesOn() {
		timer.textContent = "Elapsed time: " + timeElapsed++;
	}

startButton.addEventListener("click", function(event){
  event.preventDefault();
  timer.textContent = "Elapsed time: 0";
  intervalID = window.setInterval(timeGoesOn, 1000);
});

resetButton.addEventListener("click", function(event){
	event.preventDefault();
	window.clearInterval(intervalID);
	timer.textContent = "Stop Watch";
	timeElapsed = 1;
});

pauseButton.addEventListener("click", function(event){
	event.preventDefault();
	window.clearInterval(intervalID);
	timer.textContent = "Elapsed time: " + timeElapsed;
})