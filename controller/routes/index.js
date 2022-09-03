const router = require('express').Router();
const transactionRoutes = require('./transactionRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/transaction', transactionRoutes);

module.exports = router;
