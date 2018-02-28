var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res) {

        var newUser = req.body;

        newUser.scores = newUser["scores[]"];

        delete newUser ["scores[]"];

        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i])
        };

        friendsArray.push(newUser);
        
        res.json(newUser);
    });

};
