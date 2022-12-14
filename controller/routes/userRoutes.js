const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {    // POST /api/user
  try {
    const userData = await User.create(req.body);
    console.log(userData);
    req.session.save(() => {
      req.session.user_id = userData.id;
      console.log(req.session.user_id, "req.session.user_id");
      req.session.logged_in = true;

      res.status(200).json(userData);
  console.log('/api/userRoutes')
    })
  } catch (err) {
    // console.log('err userRoutes 15');
    res.status(400).json(err);
  }
});

router.get('/', (req, res) => {     //      /api/user - GET all users in db     GET /api/user
  User.findAll().then((userData) => {
    res.json(userData);
  });

});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      // req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;


// router.get('/', (req, res) => {     // GET all users in db
//     User.findAll().then((userData) => {
//       res.json(userData);
//     });
// });
