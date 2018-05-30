$(document).ready(function () {

    var magicLetter, guessesLeft = 8, userGuess, guessedLetters = [], winCount = 0, lossCount = 0;

    //Initialize list of letters to be chosen
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //Sets the new letter to guess. Must be set initially and after every win/loss.
    magicLetter = letters[Math.floor(Math.random() * letters.length)];
    magicLetter = magicLetter.toUpperCase();
    console.log("the magic letter is " + magicLetter);

    //Takes key input and appends it to a list
    $("#inputBox").keyup(function (event) {
        var theKey = (event.keyCode ? event.keyCode : event.which);
        userGuess = String.fromCharCode(theKey);
        console.log(userGuess);
        var letterTest = /^[A-Za-z]+$/;

        /*Perform a check to see if the user's 
        guess is the computer's letter
        ::Victory condition::*/
        if (userGuess == magicLetter) {
            console.log("Into Victory!")
            alert("You've won!");
            winCount ++;
            $("#winsNum").html(winCount);
            resetBoard();
        }

        /*Tests if the key pressed is a letter.
        If it is, it then tests if the letter has
        been guessed before.*/
        if (userGuess.match(letterTest)) {
            console.log("first if")
            console.log(guessedLetters.length)
            for (var i = 0; i < guessedLetters.length; i++) {
                //console.log("looped for " + i + "times")
                if (userGuess === guessedLetters[i]) {
                    console.log("it got here?")
                    return;
                }

            }

            /*Only occurs if the for loop is gone through
            and the userGuess doesn't match another guess
            Adds the newly guessed letter to the list*/
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
            guessesLeft--;
            $("#guessesNum").html(guessesLeft);
            $("#guessedLetters").html(guessedLetters)

            //Check if the guessed letter matches the computer's letter
            if (guessesLeft === 0) {
                alert("You lose!");
                lossCount ++;
                $("#lossesNum").html(lossCount);
                resetBoard();
            }
        }
    })

    function resetBoard() {
        magicLetter = letters[Math.floor(Math.random() * letters.length)];
        magicLetter = magicLetter.toUpperCase();
        guessesLeft = 8, userGuess = "", guessedLetters = [];
        console.log(magicLetter);
        $("#guessesNum").html(8);
        $("#guessedLetters").html("")
    }

})