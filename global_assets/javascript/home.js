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

        var rpg = new Card("pages/rpg/rpg-game.html", "pages/rpg/assets/images/portrait/roy.jpg", "Fire Emblem RPG", "RPG Game");
        var psychic = new Card("pages/psychic/psychic.html", "pages/psychic/assets/images/ball.jpeg", "Pyschic Ball", "Psychic Game");
        var trivia = new Card("pages/trivia/trivia.html", "pages/trivia/assets/images/dragontrivia.jpg", "Dragon", "Myth Trivia");
        var bearCrystal = new Card("pages/crystal_math/crystalgame.html", "pages/crystal_math/assets/images/bear.jpg", "Bear", "Honey Bear");
        var gifResponse = new Card("pages/gifer/gif-response.html", "pages/gifer/assets/images/hobbiton.jpg", "hobbiton", "Gifs of the Rings");
        var trainTime = new Card("pages/traintimer/traintime.html", "pages/traintimer/assets/images/traintrax.jpg", "train tracks", "Train Station");
        var crawlspace = new Card("pages/crawlspace/crawlspace.html", "pages/crawlspace/assets/images/background.jpg", "binary", "Crawlspace");

        portfolioOpts.push(rpg, psychic, trivia, bearCrystal, gifResponse, trainTime, crawlspace);
    };

    function clickCarrot(div) {
        $(div).prepend("< ");
        $(div).append(" >");
        $(div).css("color", "gold");
    };

    function cleanCarrot(div, cleanText) {
        $(div).text(cleanText)
        $(div).removeAttr("style")
    }

    function aboutFiller(section) {
        var newDiv;
        if (!about) {
            about = true;
            clickCarrot("#aboutClick");

            newDiv = $("<div>");
            newDiv.addClass("abouttext")
            newDiv.html(
                "Enterprising Web Developer with a history of high-quality work. " +
                "Developed skills as an influential member of a division at Best Buy requiring 60 hour weeks, travel, organization, teamwork, and time management. " +
                "Currently attending the UMN-Twin Cities Web Development Bootcamp while pursuing a degree in Computer Science with a 3.70 GPA. " +
                "Experienced in HTML, CSS, Bootstrap, Javascript, J-Query, node, APIs, AJAX, firebase, and Agile workflow. " +
                "Created an application that displays crimes near searched areas by integrating the Google Maps API and a crime API. " +
                "Passionate about tech and excited to learn and grow within the field."
            );
            $(section).html(newDiv);
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

    function conFiller(section) {

    }

    $("#aboutClick").on("click", function () {
        aboutFiller("#aboutFill");
    });

    $("#portClick").on("click", function () {
        portFiller("#portFill");
    });

    $("#conClick").on("click", function () {
        conFiller("#contactFill");
    });

    buildPortfolio();
});