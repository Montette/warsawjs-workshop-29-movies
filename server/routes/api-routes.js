const router = require('express').Router();
const filmsController = require('../controllers/filmsController');

router.route('/films')
    .get(filmsController.get);

module.exports = router;