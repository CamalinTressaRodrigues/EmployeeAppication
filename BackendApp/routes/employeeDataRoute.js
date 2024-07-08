const express = require('express');
const { employeeLogin } = require('../Controllers/employeeLogin');
const router = express.Router();
router.use(express.json());

router.post('/login', employeeLogin)

module.exports = router;