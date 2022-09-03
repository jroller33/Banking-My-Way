const router = require('express').Router();
const apiRoutes = require('./routes');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {       // HTML Routes
    res.render('login');
});

router.get('/members', async (req, res) => {
    res.render('members');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;