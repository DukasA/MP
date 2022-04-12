const Router = require('express');
const sliderController = require('../controllers/sliderController');
const router = new Router();

router.post('/create', sliderController.create);
router.get('/getall', sliderController.getAll);

module.exports = router;