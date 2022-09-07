const router = require('express').Router();
const { Transaction, Budget } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {     //      /api/transaction - GET all transactions in db
  Transaction.findAll().then((transactionData) => {
    console.log(transactionData);
    res.json(transactionData);
  });
});

// router.post('/', withAuth, async (req, res) => {
router.post('/', async (req, res) => {
  try {
    const newBudget = await Budget.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBudget);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
router.delete('/:id', async (req, res) => {
  try {
    const budgetData = await Budget.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,       // are these needed?
      },
    });

    if (!budgetData) {
      res.status(404).json({ message: 'No budget found with this id!' });
      return;
    }

    res.status(200).json(budgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// seed the db with transactions to display
// router.post('/seed', (req, res) => {    
//   Transaction.bulkCreate([
//     {
//       date: '2022-01-05',
//       category: 'house',
//       description: 'rent',
//       amount: -1000
//     },
//     {
//       date: '2022-02-05',
//       category: 'house',
//       description: 'rent',
//       amount: -1000
//     },
//     {
//       date: '2022-01-02',
//       category: 'food',
//       description: 'groceries',
//       amount: -56.23
//     },
//     {
//       date: '2022-02-01',
//       category: 'food',
//       description: 'groceries',
//       amount: -87.21
//     }
//   ])
//     .then(() => {
//       res.send('Database seeded!');
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });
