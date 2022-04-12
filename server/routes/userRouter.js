const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth.middleware');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/registration', userController.registration, checkRoleMiddleware);
router.post('/login', userController.login, checkRoleMiddleware);
router.get('/auth', authMiddleware, userController.check, checkRoleMiddleware);

module.exports = router;