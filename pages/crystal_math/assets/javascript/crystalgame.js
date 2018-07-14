$(document).ready(function () {
    var honeyOpt = [], gemOpt = [], honeyVal, gem1 = 0, gem2 = 0, gem3 = 0, gem4 = 0, wins = 0, losses = 0, userSum

    //Makes the list of possible total score values
    for (var i = 19; i < 120; i++) {
        honeyOpt.push(i);
    }

    //Makes the list of possible total gem values
    for (var i = 1; i < 13; i++) {
        gemOpt.push(i);
    }

    console.log (gemOpt)

    initGame();

    function initGame() {

        //sets/resets userSum
        userSum = 0;
        $("#scoreNum").html(userSum);

        //Sets honey value to target
        honeyVal = honeyOpt[Math.floor(Math.random() * honeyOpt.length)];
        $("#honeyText").html(honeyVal);
        console.log("Honey value is " + honeyVal);

        //Sets gem values
        gem1 = gemValuer(gem1);
        gem2 = gemValuer(gem2);
        gem3 = gemValuer(gem3);
        gem4 = gemValuer(gem4);

        /*
        console.log("gem1 value is " + gem1);
        console.log("gem2 value is " + gem2);
        console.log("gem3 value is " + gem3);
        console.log("gem4 value is " + gem4);
        */
    }

    function gemValuer(gemNum) {
        gemNum = gemOpt[Math.floor(Math.random() * gemOpt.length)];
        //console.log("next gem will have " + gemNum);
        return gemNum;
    }

    $("#gem1").click(function() {
        clicker(gem1)
    })

    $("#gem2").click(function() {
        clicker(gem2)
    })

    $("#gem3").click(function() {
        clicker(gem3)
    })

    $("#gem4").click(function() {
        clicker(gem4)
    })

    function clicker(valNum) {

        userSum += valNum;
        console.log("Gem val is " + valNum + ". Total points are " + userSum);
        $("#scoreNum").html(userSum);
        
        //Set up victory conditions on click
            if (userSum === honeyVal) {
            wins ++;
            $("#winsNum").html(wins);
            alert("You win!");
            initGame();
        }
        else if (userSum > honeyVal) {
            losses++;
            $("#lossNum").html(losses);
            alert("You lose! Try again!");
            initGame();
        }
    }

})