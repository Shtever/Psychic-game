


var win = 0;
var loss = 0;
var guessLeft = 9;
var letterGuess = []

// ASCII characters to letters //
// 97-122 = a-z

// Pick random number 97-122 //
var min = 97;
var max = 122;
var random =
    Math.floor(Math.random() * (+max - +min)) + +min;

function startOver (){
    random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

// convert number to letter & console.log it//
var letter = String.fromCharCode(random);
console.log(letter);

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    console.log(userGuess);

    if (guessLeft <= 1) {
        loss++;
        document.getElementById("loss").innerHTML = loss;
        console.log("You lost!");
        alert("You lost!");
        guessLeft = 9;
        letterGuess = [];
        document.getElementById("guessLeft").innerHTML = 9;
        console.log(letter);
        console.log(userGuess);
    } else if (userGuess === letter) {
            win++
            alert("Nicely Done");
            document.getElementById("win").innerHTML = win;
            console.log("You Won!")
            console.log(letter);
        } else if (userGuess !== letter) {
            guessLeft--;
            letterGuess.push(event.key)
            document.getElementById("guessLeft").innerHTML = guessLeft;
    }
}