const router = require('express').Router();
const User = require('../../models/User');

router.get('/', (req, res) => {     // GET all users in db
    User.findAll().then((userData) => {
      res.json(userData);
    });
});

module.exports = router;