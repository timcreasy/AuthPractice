const { Router } = require("express");
const router = Router();

router.get('/about', (req, res) => {
  res.send('ABOUT');
});

module.exports = router;