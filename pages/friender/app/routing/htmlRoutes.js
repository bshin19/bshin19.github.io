var path = require("path");

//Two routes:
module.exports = function (app) {

    //Route 1: GET
    //This goes to /survey, which displays the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Route 2: Default
    //This goes to home.html, which displays the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}