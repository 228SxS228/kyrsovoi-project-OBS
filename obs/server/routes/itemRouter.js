const Router = require('express');
const router = new Router();
const itemController = require('../controllers/itemControlle');
const checkRole = require('../middliware/checkRoleMiddleware');


router.post('/', checkRole('ADMIN'), itemController.create)
router.get('/', itemController.getAll)
router.get('/:id', itemController.getOne)


module.exports = router;