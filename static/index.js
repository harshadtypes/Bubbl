var audio = new Audio("../static/Audios/hd-by-gvh-sounds.mp3")
var log = document.getElementsByClassName('logo');
var imag = document.getElementById('compil');
// var text = document.getElementById('white-desc');

function play() {
    audio.play();
    imag.src = "/static/UI_Elements/flavours/flav.jpg";
    // text.style.display = "block";  
    console.log("play");
}