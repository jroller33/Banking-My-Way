var db = require("../models");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", function(req, res) {
        if (req.user) {
            console.log(req.user + " user is logged in");
            res.redirect("/members");
        }

        res.render("signup");
    });

    app.get("/login", function(req, res) {
        if (req.user) {
            res.redirect("/members");
        }
        res.render("login");
    });
}