const express = require('express');
const api = require('./controller/index');
const sequelize = require('./config/connection');
// const db = require("../models");

// const isAuthenticated = require("../config/middleware/isAuthenticated");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);


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

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
