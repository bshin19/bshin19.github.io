$(document).ready(function () {

    //Initialize the base list of options to be searched
    var lotrList = ["Aragorn", "Legolas", "Gimli", "Gandalf", "Meriadoc", "Pippin", "Bilbo", "Frodo", "Samwise", "Gollum", "Boromir", "Faramir"];
       
    //Resets the page to initial values
    function startingTheme() {
        for (var i = 0; i < lotrList.length; i++) {
            //console.log("entered loop " + lotrList[i]);
            appendGifButton(lotrList[i]);
        };
    };

    //Adds a new button to add a row of gifs to the data-gif 
    function appendGifButton(name) {
        
        var gifButton = $("<button>");
        gifButton.addClass("btn btn-secondary mb-2");
        gifButton.attr("data-gif", name);
        gifButton.text(name);

        $("#nameSection").append(gifButton);
    };

    //displays a select number of gifs based on what search term is provided
    function displayGifs(searchTerm) {

        var queryURL = "https://api.giphy.com/v1/gifs/random?tag=" +
            searchTerm + "&api_key=dc6zaTOxFJmzC";
        for (var i = 0; i < 4; i++) {
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var data = response.data;

                //var imageURL = data[i].images.fixed_height.url;
                var movingURL = data.images.fixed_height.url;
                var stillURL = data.images.fixed_height_still.url;
                console.log(movingURL)
                console.log(stillURL)

                var gifCol = $("<img>");
                gifCol.addClass("col-3 gif");
                gifCol.attr("src", stillURL);
                gifCol.attr("data-state", "still");
                gifCol.attr("data-animate", movingURL);
                gifCol.attr("data-still", stillURL);

                $("#gifSection").prepend(gifCol);
            });
        };
    };

    $("#nameSection").on("click", "button", function () {
        var clickTerm = $(this).attr("data-gif");
        displayGifs(clickTerm);
    });

    $("#gifSection").on("click", ".gif", function () {
        console.log("clicked");
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })

    $("#gifSubmit").on("click", function (event) {
        event.preventDefault();

        var gifName = $("#gifSearch").val().trim();

        //Calls the function to display new gif buttons
        appendGifButton(gifName);
        //Calls the function to display new gifs with the user inputted text
        displayGifs(gifName);
    })

    $("gifClear").on("click", function() {
        $("#gifSection").empty();
        $("#nameSection").empty();
        startingTheme();
    })

    startingTheme();
})