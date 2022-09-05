const router = require('express').Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');        //      /views/login.handlebars
});

// router.get('/members', async (req, res) => {
//     res.render('members');
// });

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/transaction', async (req, res) => {         // this is for the test page, which shows all transactions from GET /api/transaction
    try {
        // get all transactions
        const transactionData = await Transaction.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id'],
                },
            ],
        });

        const transactions = transactionData.map((transaction) => transaction.get({ plain: true }));

        res.render('transaction', {
            transactions,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/transaction/:id', async (req, res) => {
    try {
      const transactionData = await Transaction.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['id'],
          },
        ],
      });
  
      const transaction = transactionData.get({ plain: true });
  
      res.render('transaction', {
        ...transaction,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// // Use withAuth middleware to prevent access to route
// router.get('/members', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Project }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('members', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
// router.get('/login', (req, res) => {
// // If the user is already logged in, redirect the request to another route
// if (req.session.logged_in) {
//     res.redirect('/members');
//     return;
// }

// res.render('login');
// });

module.exports = router;