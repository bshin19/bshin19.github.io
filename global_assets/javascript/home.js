$(document).ready(function () {
    var about = false, portfolio = false, contact = false;

    function aboutFiller(section) {
        var newDiv;
        if (!about) {
            about = true;

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
        };
    };

    function portFiller(section) {
        var newDiv = $("<div>");
        if (!portfolio) {
            portfolio = true;

            for (var i = 0; i < portfolioOpts.length; i++) {

            }
        }
    }

    function fillSection(section) {

        switch (section) {
            case "#aboutFill":
                aboutFiller(section);
                break;

            case "portFill":
                break;

            case "conFill":
                break;
        };
    };

    $("#aboutClick").on("click", function () {
        fillSection("#aboutFill");
    });
});