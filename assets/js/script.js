ele = document.getElementById("ele1")

function pintar(background = "green") {
    ele.style.backgroundColor = background
}

ele.addEventListener("click", () => pintar("yellow"))