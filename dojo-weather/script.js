let weather_api = null;

function getCity(element) {
    console.log(element)
    alert("Loading weather report...");
}

function hide() {
    var element = document.querySelector("footer");
    // console.log(element);
    element.remove();
}

var x = document.querySelectorAll(".number");

console.log(x);

function temperature() {
    for(var i = 0; i < x.length; i++) {
        var convert = x[i];
        var num = parseInt(convert.innerText, 10)
        convert.innerHTML = Math.floor(num * 1.8 + 32) + "&#176;";
    }
}