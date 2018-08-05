//Holds array information on friends
var friendData = require('../data/friends')

//Two routes:
module.exports = function (app) {

    //Route 1: GET
    // /api/friends : displays a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // Route 2: POST
    // /api/friends : handles incoming survey results + compatability logic
    app.post("/api/friends", function (req, res) {
        // req.body is available through body-parser
        friends.push(req.body);
        res.json(friends);
    })

    //Compatibility Guide:
    /* Convert user results array into an array of only their numbers
    Compare the differences between each matching number and total them up. *Use Absolute Val*
    The closest match is the user with the least amount of difference
    */

    /* Once the user's most compatible friend is figured out, 
    display the result as a modal popup.
    The modal will display the name and picture of the closest match*/
};