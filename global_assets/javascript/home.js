$(document).ready(function () {
    var about = false, portfolio = false, contact = false;
    var portfolioOpts = [];
    var funkDefaults = [
        "blowdryingCode", "eatingCookies", "camelCasingCamels", "googlingAndGoggling",
        "RESTing", "drinkingJavascript", "queryingJQuery", "nimbleAndAgile",
        "automatingAPIs", "grabbingBootstraps", "dbMongoBongo", "awaitingCommand"
    ]

    var funkChange = document.getElementById('funkChange');
    var typewriter = new Typewriter(funkChange, {
        deleteSpeed: 'fast'
    });
    var funkTimer;

    function buildPortfolio() {
        function Card(filepath, imagepath, altName, titleName) {
            this.page = filepath;
            this.image = imagepath;
            this.alt = altName;
            this.title = titleName;
        };

        var emblemAnims = new Card("https://emblem-anims.herokuapp.com", "global_assets/images/battlefield.jpg", "battle", "Emblem Anims");
        var foreignExchange = new Card("https://arcane-gorge-10209.herokuapp.com", "global_assets/images/foreign.jpg", "Foreign Langs", "ForeignExchange");
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

        portfolioOpts.push(emblemAnims, foreignExchange, rpg, psychic, trivia, bearCrystal, gifResponse, trainTime, crawlspace, liriBot, hangNode, friender, burgerme);
    };

    function clickCarrot(divID, clickedDiv, added, removed) {
        clearTimeout(funkTimer);
        if (clickedDiv.getAttribute("data-clicked") == "true") {
            $(divID).removeAttr("style");
            clickedDiv.setAttribute("data-clicked", false)
            funkReplace(removed);
            autoFunk();
        } else {
            $(divID).css("color", "gold");
            clickedDiv.setAttribute("data-clicked", true)
            funkReplace(added);
            autoFunk();
        }
        funkTimer();
    };

    function aboutFiller(section) {
        if (!about) {
            about = true;

            aboutDiv = $("<div>");
            aboutDiv.addClass("abouttext red ml-2")
            aboutDiv.html(
                "Enterprising Web Developer with a history of high-quality work. Currently attending the UMN-Twin Cities Web Development Bootcamp while pursuing a degree in Computer Science with a 3.70 GPA. Experienced in HTML, CSS, Bootstrap, handlebars, Javascript, J-Query, node.js, APIs, AJAX, Firebase, mysql, sequelize, and the Agile workflow. Created an application for an online community that compiles their open source works and displays them in an accessible fashion and another app that allows users to correct translations and vote on the best way of speaking in foreign languages. Passionate about tech and excited to learn and grow within the field."
            );

            $(section).html(aboutDiv);
        } else {
            $(section).toggle();
        };
    };

    function portFiller(section) {
        if (!portfolio) {
            portfolio = true;

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

                aLink.append(portImage, portText)
                colDiv.append(aLink);
                rowDiv.append(colDiv);
                $(section).html(rowDiv);
            };
        } else {
            $(section).toggle();
        }
    };

    function conLink(link, img, text) {

        var mid = $("<div>")
            .addClass("col-lg-4 col-12")

        var midA = $("<div>")
            .addClass("contactLink");

        if (link) {
            midA = $("<a>")
                .addClass("contactLink")
                .attr("href", link);
        };

        var midImg = $("<img>")
            .attr("src", "global_assets/images/" + img);

        var midSpan = $("<span>")
            .html(" " + text);

        midA.append(midImg, midSpan);
        mid.append(midA);

        return mid;
    }

    function conFiller() {
        if (!contact) {
            contact = true;

            var conDiv = $("<div>")
                .addClass("row white");

            var gitDiv = conLink("https://github.com/bshin19", "logo_github.png", "Github");

            var linkDiv = conLink("https://linkedin.com/in/bradyshinners", "logo_linkedin.png", "Linkedin");

            var emailDiv = conLink("", "logo_gmail.png", "brady.shinners@gmail.com");

            conDiv.append(gitDiv, linkDiv, emailDiv);

            $("#contactFill").append("<br>", conDiv, "<br>");

        } else {
            $("#contactFill").toggle();
        };
    };

    function autoFunk() {
        funkTimer = setTimeout(function () {
            funkReplace(funkDefaults[Math.floor(Math.random() * funkDefaults.length)])
            autoFunk();
        }, 6000);
    };

    function funkReplace(functName) {

        typewriter.typeString(functName)
            .pauseFor(1500)
            .deleteAll()
            .start();
        // $("#funkChange").text(
        //     functName
        // )
    }

    $("#aboutClick").on("click", function () {
        console.log("here")
        aboutFiller("#aboutFill");
        clickCarrot("#aboutClick", this, "millingAbout", "hidingAbout");
    });

    $("#portClick").on("click", function () {
        portFiller("#portFill");
        clickCarrot("#portClick", this, "buildingPortfolio", "terminatingPortfolio");
    });

    $("#conClick").on("click", function () {
        conFiller();
        clickCarrot("#conClick", this, "contactMe", "neverMind");
    });

    buildPortfolio();
    typewriter.typeString("helloWorld")
        .pauseFor(2600)
        .deleteAll()
        .start();
    autoFunk();
});