const express = require('express');
const router = express.Router();
const nomController = require('../controller/nomController');

router.get('/', nomController.getBackPage);

module.exports = router;