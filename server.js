const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
// const routes = require('./controller/index');
const sequelize = require('./config/connection');

// const user = require("./models/user");
// const transactions = require("./models/Transactions");
// const isAuthenticated = require("./config/isAuthenticated");

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controller/index'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});

// app.get("/", function(req, res) {
//   if (req.user) {
//       console.log(req.user + " user is logged in");
//       res.redirect("/members");
//   }
//   res.render("signup");
// });

// app.get("/login", function(req, res) {
//     if (req.user) {
//         res.redirect("/members");
//     }
//     res.render("login");
// });

// Starts the server to begin listening
// app.listen(PORT, () => {
//   console.log('Server listening on: http://localhost:' + PORT);
// });
