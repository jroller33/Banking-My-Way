const router = require('express').Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const Budget = require('../models/Budget');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('login');        //      /views/login.handlebars
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('/transaction', async (req, res) => {         // this is for the test page, which shows all transactions from GET /api/transaction
try {
    // get all transactions
    const transactionData = await Transaction.findAll();

    const transactions = transactionData.map((transaction) => transaction.get({ plain: true }));

    res.render('transaction', {
        transactions
        // logged_in: req.session.logged_in
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

router.get('/budget', async (req, res) => {
    try {
      // const budgetData = await Budget.findAll().then((transactionData));



      const budgetData = await Budget.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
      const budget = budgetData.get({ plain: true });
      console.log(budget);
      res.render('budget', {
        ...budget,
        // logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.get('/budget', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Budget }],
//     });
//     const user = userData.get({ plain: true });
//     res.render('budget', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// router.get('/budget/:id', async (req, res) => {
//   try {
//     const budgetData = await Budget.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });
//     const budget = budgetData.get({ plain: true });
//     res.render('budget', {
//       ...budget,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

// //  withAuth to prevent access to route
// router.get('/members', withAuth, async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Budget }],
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
  
router.get('/login', (req, res) => {
if (req.session.logged_in) {
    res.redirect('/transaction');
    return;
}

res.render('login');
});
