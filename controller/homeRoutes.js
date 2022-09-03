const router = require('express').Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const withAuth = require('../utils/auth');





router.get('/', async (req, res) => {       // HTML Routes
    res.render('login');        //      /views/login.handlebars
});

router.get('/members', async (req, res) => {
    res.render('members');
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


module.exports = router;