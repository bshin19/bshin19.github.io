$(document).ready(function () {
    var about = false, portfolio = false, contact = false;
    var portfolioOpts = [];

    function buildPortfolio() {
        function Card(filepath, imagepath, altName, titleName) {
            this.page = filepath;
            this.image = imagepath;
            this.alt = altName;
            this.title = titleName;
        };

        var rpg = new Card("pages/rpg/index.html", "pages/rpg/assets/images/portrait/roy.jpg", "Fire Emblem RPG", "RPG Game");
        var psychic = new Card("pages/psychic/index.html", "pages/psychic/assets/images/ball.jpeg", "Pyschic Ball", "Psychic Game");
        var trivia = new Card("pages/trivia/index.html", "pages/trivia/assets/images/dragontrivia.jpg", "Dragon", "Myth Trivia");
        var bearCrystal = new Card("pages/crystal_math/index.html", "pages/crystal_math/assets/images/bear.jpg", "Bear", "Honey Bear");
        var gifResponse = new Card("pages/gifer/index.html", "pages/gifer/assets/images/hobbiton.jpg", "hobbiton", "Gifs of the Rings");
        var trainTime = new Card("pages/traintimer/index.html", "pages/traintimer/assets/images/traintrax.jpg", "train tracks", "Train Station");
        var crawlspace = new Card("pages/crawlspace/index.html", "pages/crawlspace/assets/images/background.jpg", "binary", "Crawlspace");
        var liriBot = new Card("https://github.com/bshin19/liribot", "global_assets/images/fruitbg.jpg", "fruit", "Liribot");
        var hangNode = new Card("https://github.com/bshin19/node-hangman", "global_assets/images/hangman.jpg", "hangman", "Hangman");
        var friender = new Card("https://bs-friender.herokuapp.com/", "global_assets/images/friends.jpg", "friends", "Friend-Finder");
        var burgerme = new Card("https://warm-shore-35019.herokuapp.com/", "global_assets/images/burger.jpg", "Burger", "Burger Me");

        portfolioOpts.push(rpg, psychic, trivia, bearCrystal, gifResponse, trainTime, crawlspace, liriBot, hangNode, friender, burgerme);
    };

    function clickCarrot(div) {
        $(div).prepend("< ");
        $(div).append(" >");
        $(div).css("color", "gold");
    };

    function cleanCarrot(div, cleanText) {
        $(div).text(cleanText);
        $(div).removeAttr("style");
    }

    function aboutFiller(section) {
        if (!about) {
            about = true;
            clickCarrot("#aboutClick");

            aboutDiv = $("<div>");
            aboutDiv.addClass("abouttext")
            aboutDiv.html(
                "Enterprising Web Developer with a history of high-quality work. " +
                "Developed skills as an influential member of a division at Best Buy requiring 60 hour weeks, travel, organization, teamwork, and time management. " +
                "Currently attending the UMN-Twin Cities Web Development Bootcamp while pursuing a degree in Computer Science with a 3.70 GPA. " +
                "Experienced in HTML, CSS, Bootstrap, Javascript, J-Query, node, APIs, AJAX, firebase, and Agile workflow. " +
                "Created an application that displays crimes near searched areas by integrating the Google Maps API and a crime API. " +
                "Passionate about tech and excited to learn and grow within the field."
            );

            $(section).html(aboutDiv);
        } else {
            about = false;
            $(section).empty();
            cleanCarrot("#aboutClick", "About")
        };
    };

    function portFiller(section) {
        if (!portfolio) {
            portfolio = true;
            clickCarrot("#portClick");

            //var columns = 0;

            var rowDiv = $("<div>");
            rowDiv.addClass("row");

            for (var i = 0; i < portfolioOpts.length; i++) {
                var colDiv = $("<div>");
                colDiv.addClass("col-lg-4 col-sm-6 col-6 centerSmall");

                var portImage = $("<img>");
                portImage.addClass("portfolioimages");
                portImage.attr("src", portfolioOpts[i].image);
                portImage.attr("alt", portfolioOpts[i].alt);

                var portText = $("<p>");
                portText.addClass("portfoliotext");
                portText.html(portfolioOpts[i].title);

                var aLink = $("<a>");
                aLink.attr("href", portfolioOpts[i].page);

                aLink.append(portImage,portText)
                colDiv.append(aLink);
                rowDiv.append(colDiv);
                $(section).html(rowDiv);
            };
        } else {
            portfolio = false;
            $(section).empty();
            cleanCarrot("#portClick", "Portfolio");
        }
    };

    function formBuilder(labelTitle, labelHTML, placeholdTitle, isMessBox) {

        var colDiv = $("<div>");
        colDiv.addClass("form-group");

        var inputLabel = $("<label>");
        inputLabel.attr("for", labelTitle);
        inputLabel.html(labelHTML);
        
        if (!isMessBox) {
            var inputInfo = $("<input>");
            inputInfo.addClass("form-control contact-width");
            inputInfo.attr("id", labelTitle);
            inputInfo.attr("placeholder", placeholdTitle);
        } else {
            var inputInfo = $("<textarea>");
            inputInfo.addClass("form-control");
            inputInfo.attr("id", labelTitle);
            inputInfo.attr("rows", placeholdTitle);
        };

        colDiv.append(inputLabel, inputInfo);
        return colDiv
        
    };

    function conFiller() {
        if (!contact) {
            contact = true;
            clickCarrot("#conClick");

            var nameForm = $("<form>");

            var inEmail = formBuilder("inputEmail", "Email", "Johndoe@Example.com", false);
            var inName = formBuilder("inputName", "Name", "John Doe", false);
            var inMess = formBuilder("messagebox", "Message", 5, true);

            var subBtn = $("<button>");
            subBtn.addClass("btn btn-primary");
            subBtn.attr("type", "submit");
            subBtn.html("Submit");

            nameForm.append(inEmail, inName, inMess, subBtn);
            $("#contactFill").append(nameForm);

        } else {
            contact = false;
            cleanCarrot("#conClick", "Contact");
            $("#contactFill").empty();
        };
    };

    $("#aboutClick").on("click", function () {
        aboutFiller("#aboutFill");
    });

    $("#portClick").on("click", function () {
        portFiller("#portFill");
    });

    $("#conClick").on("click", function () {
        conFiller();
    });

    buildPortfolio();
});