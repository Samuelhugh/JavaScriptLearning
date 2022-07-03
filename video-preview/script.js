console.log("page loaded...");

// var x = document.getElementById("myvid");

function over(video) {
    video.play()
}

function out(video) {
    video.pause();
    video.currentTime = 0;
}