const Router = require('express');
const postController = require('../controllers/postController');
const router = new Router();

router.post('/create', postController.create);
router.get('/getall', postController.getAll);
router.post('/delete', postController.deletePost);

module.exports = router;