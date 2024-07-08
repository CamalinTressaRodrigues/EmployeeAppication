const express = require('express');
const { employeeList } = require('../Controllers/employeeList');
const router = express.Router()
router.use(express.json());


router.get('/employeelist', employeeList)


module.exports = router;