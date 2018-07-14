$(document).ready(function () {

    //https://opentdb.com/api_count.php?category=20

    var queryURL = "https://opentdb.com/api.php?amount=10&category=20";
    var question = 0, score = 0, tempAnswer, timeScore = 0;
    var time = 30;
    var winSound = new Audio("https://soundbible.com/grab.php?id=1003&type=mp3");
    var loseSound = new Audio("https://soundbible.com/grab.php?id=2054&type=mp3");
    //var gameOverSound = new Audio("http://www.thesoundarchive.com/ace/one/loser.mp3");
    //var victorySound = new Audio("location.href='http://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=Not+to+be+truffled+with&filename=nz/Nzk0NTY0MDM5Nzk0NTkz_zUfJJIq_2bbzQ.mp3");

    function displayTimer() {
        time--;
        $("#timer").html("<div class='centerText'>Time Remaining: " + time)
        timeOn = setTimeout(displayTimer, 1000);
        if (time < 1) {
            $("#timer").html("<div class='centerText'>You've run out of time! Game Over...</div>");
            restartButton();
        };
    };

    function timePoints() {
        timeScore += 30 - time;
    };

    function restartButton() {
        clearTimeout(timeOn);
        $("#triviaPop").empty();
        score = 0;
        question = 0;
        timeScore = 0;
        var triviaBut = $("<button>");
        triviaBut.attr("class", "btn btn-danger");
        triviaBut.attr("id", "btnPlay")
        triviaBut.text("Play Again");
        $("#triviaPop").append(triviaBut);
        //console.log("timer is looping");
    }

    function initGame() {

        $("#triviaPop").empty();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var correctAns = response.results[question].correct_answer;
            tempAnswer = correctAns;
            var possAns = [];
            possAns.push(correctAns);
            for (var j = 0; j < response.results[question].incorrect_answers.length; j++) {
                possAns.push(response.results[question].incorrect_answers[j]);
            };

            //Randomizes the list of possible answers
            possAns = possAns.sort(function (a, b) { return 0.5 - Math.random() });
            //console.log("the list of possible answers after random is " + possAns);

            var trivQuest = response.results[question].question;
            //console.log(question);

            var triviaQ = $("<div>");
            triviaQ.attr("class", "triviaQ");
            triviaQ.html(trivQuest);

            var triviaOpt = $("<div>");
            triviaOpt.attr("class", "triviaOptions");

            for (var k = 0; k < possAns.length; k++) {
                var indiOpt = $("<button>");
                indiOpt.addClass("btn btn-primary col-6 answer");
                indiOpt.attr("type", "button");

                if (possAns[k] === correctAns) {
                    indiOpt.attr("data-correct", "correct");
                } else {
                    indiOpt.attr("data-correct", "incorrect");
                };

                indiOpt.text(possAns[k]);
                triviaOpt.append(indiOpt);
            };

            $("#triviaPop").prepend(triviaOpt);
            $("#triviaPop").prepend(triviaQ);
            time = 30;
            displayTimer();

        });
    };

    function makeDiv(divType, divClass, divAttrType, divData) {
        var tempDiv = $("<" + divType + ">");
        tempDiv.addClass(divClass);

        if (divAttrType === "src") {
            tempDiv.attr(divAttrType, divData);
        } else {
            tempDiv.html(divData);
        };

        return tempDiv;
    };

    function getGif(winLose) {

        var gifURL = "https://api.giphy.com/v1/gifs/random?tag=" + tempAnswer + "&api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: gifURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var winDiv = makeDiv("div", "triviaQ", "html", winLose);
            var image = makeDiv("img", "centerGif", "src", response.data.images.fixed_height.url);
            var answerP = makeDiv("p", "triviaQ", "html", tempAnswer + " was the correct choice!");
            var scoreP = makeDiv("p", "triviaQ", "html", "Current score is " + score + " / " + question);

            $("#triviaPop").append(winDiv, image, answerP, scoreP);
        });
    };

    function displayGif(points) {
        
        if (points) {
            getGif("Congratulations!");
        } else {
            getGif("Incorrect!");
        };
    };

    //Pushes all the possible answers into a list of four questions
    //And sets a variable for the correct answer

    //Sets final score information
    function finalDisplay() {
        // if (points < 7) {
        //     gameOverSound.play();
        // } else {
        //     //victorySound.play();
        // }

        var finTally = makeDiv("div", "triviaQ", "html", "Your final score is: " + score + " / 10.");

        restartButton();

        $("#timer").empty();
        $("#triviaPop").prepend(finTally);
    };

    //Based on count, determines if another question is asked or if the final score is displayed.
    function checkCount() {
        if (question < 9) {
            //Wait 4 seconds to refresh page
            setTimeout(function () {
                initGame();
            }, 4000);
        } else {
            finalDisplay();
        };
    };

    ///EVENT LISTENERS

    //When the JS-populated answer class is clicked, run function
    $("#triviaPop").on("click", ".answer", function () {
        clearTimeout(timeOn);

        if (this.getAttribute("data-correct") === "correct") {
            score++;
            winSound.play();
            var winLose = true;
        } else {
            loseSound.play();
            var winLose = false;
        };
        $("#triviaPop").empty();

        displayGif(winLose);
        question++;
        checkCount();
    });

    //When the JS-populated btnPlay ID is clicked, run function
    $("#triviaPop").on("click", "#btnPlay", function () {
        initGame();
    });

    ///END EVENT LISTENERS
});