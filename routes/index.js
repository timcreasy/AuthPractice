const { Router } = require("express");
const router = Router();

router.use(require('./home'));
router.use(require('./about'));
router.use(require('./login'));
router.use(require('./register'));

module.exports = router;