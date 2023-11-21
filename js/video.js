var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
});

video = document.querySelector("#player1");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let slower = document.querySelector("#slower");
let faster = document.querySelector("#faster");
let skip = document.querySelector("#skip");
let mute = document.querySelector("#mute");
let slider = document.querySelector("#slider");
let old = document.querySelector("#vintage");
let original = document.querySelector("#orig");
video.autoplay = false;
video.loop = false;

play.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log("The current volume is " + video.volume + "%");
});

pause.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

slower.addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});

faster.addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});

skip.addEventListener("click", function() {
	if (video.currentTime < video.duration - 10) {
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Skip Ahead");
	console.log("Video current time is " + video.currentTime + " seconds");
});

mute.addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute";
		console.log("Unmute");
	}
	else {
		video.muted = true;
		mute.innerHTML = "Unmute";
		console.log("Mute");
	}
});

slider.addEventListener("change", function() {
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
	console.log("The current volume is " + video.volume + "%");
});

old.addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldSchool");
});

original.addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});



