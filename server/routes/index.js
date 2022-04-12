const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const sliderRouter = require('./sliderRouter');

router.use('/user', userRouter);
router.use('/post', postRouter);
router.use('/slider', sliderRouter);

module.exports = router;