const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes)

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/members', async (req, res) => {
    res.render('members');
});

router.get('/signup', async (req, res) => {
    res.render('signup');
});
// // // GET route for notes page                               
// app.get('/notes', (req, res) =>
// res.sendFile(path.join(__dirname, './public/notes.html'))
// );

module.exports = router;