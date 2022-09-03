const router = require('express').Router();
const apiRoutes = require('./routes');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {       // HTML Routes
    res.render('login');        //      /views/login.handlebars
});

router.get('/members', async (req, res) => {
    res.render('members');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

router.get('/transactions', async (req, res) => {         // this is for the test page, which shows all transactions from GET /api/transactions
    res.render('transactions');         //    /views/transactions.handlebars
});

module.exports = router;