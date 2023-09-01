var noButton = document.getElementById("no-button");
var container = document.querySelector(".container");

function showResult(message) {
    document.getElementById("result").innerText = message;
    noButton.style.display = "none";
}

function changeNoButtonPosition() {
    var randomX = Math.floor(Math.random() * (container.offsetWidth - noButton.offsetWidth));
    var randomY = Math.floor(Math.random() * (container.offsetHeight - noButton.offsetHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    if (noButton.style.display === "none") {
        noButton.style.display = "block";
    }
}
