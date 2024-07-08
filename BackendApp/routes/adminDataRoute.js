const express = require('express');
const { adminLogin } = require('../Controllers/adminLogin');
const router = express.Router();
router.use(express.json());

router.post('/login', adminLogin)

module.exports = router;