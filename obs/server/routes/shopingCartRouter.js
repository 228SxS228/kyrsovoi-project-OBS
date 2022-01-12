const Router = require('express');
const router = new Router();
const shopingCartController = require('../controllers/shopingCartController');

router.post('/', shopingCartController.addItem );
router.get('/:userId', shopingCartController.getAllItems);
router.delete('/', shopingCartController.removeItems);
router.put('/', shopingCartController.removeOneItems);

module.exports = router;