const router = require('express').Router();
const transactionRoutes = require('./transactionRoutes');
const userRoutes = require('./userRoutes');
const budgetRoutes = require('./budgetRoutes');

router.use('/user', userRoutes);
router.use('/transaction', transactionRoutes);
router.use('/budget', budgetRoutes);

module.exports = router;
