const { Router } = require('express');
const router = Router();
const login = require('../controllers/login');

router.get('/login', login.index);
router.post('/login', login.create);

module.exports = router;