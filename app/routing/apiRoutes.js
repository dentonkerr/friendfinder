var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {

        var newUser = req.body;

        newUser.scores = newUser["scores[]"];

        delete newUser["scores[]"];

        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = parseInt(newUser.scores[i])
        };

        var match = friendsArray[0];

        var friendScore = 0;

        for (var i = 0; i < newUser.scores.length; i++) {
            friendScore += math.abs(newUser.scores[i] - match.scores[i]);
        };

        for (var i = 1; i < friendsArray.length; i++) {
            var currentScore = 0;
            for (var j = 0; j < newUser.scores.length; j++) {
                currentScore += math.abs(newUser.scores[j] - friendsArray[i].scores[j]);
            };
            if (currentScore < friendScore) {
                match = friendsArray[i];
                friendScore = currentScore;
            };
        };

        friendsArray.push(newUser);

        res.json(newUser);
    });

};
