
var tecla = "white";

document.addEventListener('keydown', function (event) {
    if (event.key == 'a') {
        tecla = "aqua";
    } else if (event.key == 's') {
        tecla = "black";
    } else if (event.key == 'd') {
        tecla = "blueviolet";
    }
})

document.getElementById("div1").addEventListener("click", function(event) {
    event.target.style.backgroundColor = tecla;
});
document.getElementById("div2").addEventListener("click", function(event) {
    event.target.style.backgroundColor = tecla;
});
document.getElementById("div3").addEventListener("click", function(event) {
    event.target.style.backgroundColor = tecla;
});
document.getElementById("div4").addEventListener("click", function(event) {
    event.target.style.backgroundColor = tecla;
});