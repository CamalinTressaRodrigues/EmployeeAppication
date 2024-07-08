const express = require('express');
const { addEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../Controllers/adminCRUDoperations');
const router = express.Router()
router.use(express.json());


router.post('/add', addEmployee)

router.get('/list', getEmployee)

router.patch('/update/:id', updateEmployee)

router.delete('/delete/:id', deleteEmployee)


module.exports = router;
