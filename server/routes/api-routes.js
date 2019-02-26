const router = require('express').Router();
const filmsController = require('../controllers/filmsController');

router.route('/films')
    .get(filmsController.get);

router.route('/films/:film_id')
    .get(filmsController.view)
    .delete(filmsController.remove)
module.exports = router;