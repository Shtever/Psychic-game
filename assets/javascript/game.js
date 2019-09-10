var win = 0;
var loss = 0;
var guessLeft = 9;
var letterGuess = [];
var min = 97;
var max = 122;
var random =
    Math.floor(Math.random() * (+max - +min)) + +min;
var letter = String.fromCharCode(random);
console.log("Solution: " + letter);

function reset() {
    var min = 97;
    var max = 122;
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    letter = String.fromCharCode(random);
    console.log("Solution: " + letter);
    letterGuess = [];
    document.getElementById("letterGuess").innerHTML = letterGuess;
    guessLeft = 9;
    document.getElementById("guessLeft").innerHTML = guessLeft;

}
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (guessLeft === 0) {
        loss++;
        document.getElementById("loss").innerHTML = loss;
        console.log("You lost!");
        alert("You Lost!")
        reset();
    } else if (userGuess === letter) {
        win++
        alert("Nicely Done");
        document.getElementById("win").innerHTML = win;
        console.log("You Won!");
        reset()

    } else if (userGuess !== letter) {
        guessLeft--;
        document.getElementById("guessLeft").innerHTML = guessLeft;
        console.log("Guess:" + userGuess);
        letterGuess.push(userGuess);
        document.getElementById("letterGuess").innerHTML = letterGuess;
    }
}