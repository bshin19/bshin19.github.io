$(document).ready(function () {

    //https://opentdb.com/api_count.php?category=20

    var queryURL = "https://opentdb.com/api.php?amount=10&category=20";
    var question = 0, score = 0, tempAnswer;
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
            restartButton()
        };
    };

    function restartButton() {
        clearTimeout(timeOn);
        $("#triviaPop").empty();
        score = 0;
        question = 0;
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

            //console.log("the list of possible answers is " + possAns);

            //Randomizes the list of possible answers
            possAns = possAns.sort(function (a, b) { return 0.5 - Math.random() });
            //console.log("the list of possible answers after random is " + possAns);

            var trivQuest = response.results[question].question;
            //console.log(question);

            var triviaQ = $("<div>");
            triviaQ.attr("class", "triviaQ");
            $(triviaQ.html(trivQuest));

            var triviaOpt = $("<div>");
            triviaOpt.attr("class", "triviaOptions");
            for (var k = 0; k < possAns.length; k++) {
                var indiOpt = $("<button>");
                indiOpt.attr("type", "button");
                indiOpt.attr("class", "btn btn-primary col-6 answer");
                if (possAns[k] === correctAns) {
                    indiOpt.attr("data-correct", "correct");
                } else {
                    indiOpt.attr("data-correct", "incorrect");
                };
                indiOpt.text(possAns[k]);
                triviaOpt.append(indiOpt);
            };
            setTimeout(function () {
                $("#triviaPop").prepend(triviaOpt);
                $("#triviaPop").prepend(triviaQ);
                time = 30;
                displayTimer();
            }, 3000)

        });
    };

    function displayGif(points) {
        var gifURL = "https://api.giphy.com/v1/gifs/search?q=" + tempAnswer + "&api_key=Bl7UhvGRh5LbYflK00nZhm7ZEmBOUahZ&limit=1";
        if (points) {
            $.ajax({
                url: gifURL,
                method: "GET"
            }).then(function (response) {
                $("#triviaPop").append("<div class='triviaQ'>Congratulations!</div>")
                var image = $("<img class='centerGif'>");
                image.attr("src", response.data[0].images.fixed_height.url);
                $("#triviaPop").append(image);
                $("#triviaPop").append("<div class='triviaQ'>" + tempAnswer + " was the correct choice!</div>");
                $("#triviaPop").append("<div class='triviaQ'>Current score is " + score + " / " + question + "</div>");
            });

        } else {
            $.ajax({
                url: gifURL,
                method: "GET"
            }).then(function (response) {
                $("#triviaPop").append("<div class='triviaQ'>Incorrect!</div>")
                var image = $("<img class='centerGif'>");
                image.attr("src", response.data[0].images.fixed_height.url);
                $("#triviaPop").append(image);
                $("#triviaPop").append("<div class='triviaQ'>" + tempAnswer + " was the correct choice.</div>");
                $("#triviaPop").append("<div class='triviaQ'>Current score is " + score + " / " + question + "</div>");
            });
        };
    };

    //Pushes all the possible answers into a list of four questions
    //And sets a variable for the correct answer

    function checkCount() {
        if (questions < 9) {
            return;
        }
        else {
            // if (points < 7) {
            //     gameOverSound.play();
            // } else {
            //     //victorySound.play();
            // }
            setTimeout(function () {
                var finTally = $("<div>");
                finTally.attr("class", "triviaQ");
                finTally.text("Your final score is: " + score + " / 10.");
                restartButton();
                $("#timer").empty()
                $("#triviaPop").prepend(finTally);
            }, 3000)
        }
    }

    $("#triviaPop").on("click", ".answer", function () {
        //console.log(this);
        clearTimeout(timeOn);
            console.log("Currently on question " + question);
            var winLose;
            if (this.getAttribute("data-correct") === "correct") {
                console.log("true");
                score++;
                winSound.play();
                //correct answer
                winLose = true;
            } else {
                console.log("wrong answer");
                loseSound.play();
                winLose = false;
                //incorrect answer
            };
            $("#triviaPop").empty();

            displayGif(winLose);
            question++;
            setTimeout(initGame(), 6000);
            checkCount();
        });

    $("#triviaPop").on("click", "#btnPlay", function () {
        console.log("button clicked")
        initGame();

    });
});