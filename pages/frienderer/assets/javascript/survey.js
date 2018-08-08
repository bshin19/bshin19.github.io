$(document).ready(function () {
    $("#subBtn").click(function () {
        console.log("clicked");

        //Grab the scores from user inputs
        var scores = []
        $('select').each(function() {
            var tempScore = $(this).children('option')[this.selectedIndex].value
            scores.push(parseInt(tempScore));
        });
        console.log(scores);

        //new User info pushed into an object
        var newUser = {
            "name": $("#nameInput").value,
            "photo": $("#imageLink").value,
            "scores": scores
        };
        console.log(newUser);



    });
});