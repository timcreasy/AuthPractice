const { Router } = require('express');
const router = Router();
const register = require('../controllers/register');

router.get('/register', register.index);
router.post('/register', register.create);

module.exports = router;