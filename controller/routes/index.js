const router = require('express').Router();
const transactionRoutes = require('./transactionRoutes');

router.use('/transactions', transactionRoutes);

module.exports = router;
