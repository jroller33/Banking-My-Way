const router = require('express').Router();
const { Budget } = require('../../models');
// const withAuth = require('../../utils/auth');

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
//   try {
//     const BudgetData = await Budget.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!BudgetData) {
//       res.status(404).json({ message: 'No Budget found with this id!' });
//       return;
//     }

//     res.status(200).json(BudgetData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
