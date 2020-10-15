//for image 1
var randomNumber1 = (Math.random() * 5) + 1;
var go = Math.round(randomNumber1);
//for image 2
var randomNumber1 = (Math.random() * 5) + 1;
var go2 = Math.round(randomNumber1);

document.querySelector(".img1").setAttribute("src", "images/dice" + go + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + go2 + ".png");


var result = "";
if (go > go2) {
    result = " 🚩Player 1 Wins!";


} else if (go < go2) {
    result = "Player 2 Wins! 🚩";

} else {
    result = "Draw!";
}
document.querySelector(".container h1").innerHTML = result;