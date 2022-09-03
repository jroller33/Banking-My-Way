const router = require('express').Router();
const Transaction = require('../../models/Transactions');


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

router.get('/', (req, res) => {     // GET all transactions in db
  Transaction.findAll().then((transactionData) => {
    res.json(transactionData);
  });
});

module.exports = router;