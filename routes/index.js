const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Node.js with dogs.' });
});

module.exports = router;
