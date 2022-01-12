const Router = require('express');
const router = new Router();


const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const itemRouter = require('./itemRouter');
const typeRouter = require('./typeRouter');
const shopingCartRouter = require('./shopingCartRouter');


router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/item', itemRouter);
router.use('/type', typeRouter);
router.use('/shopingcart', shopingCartRouter);

module.exports = router;