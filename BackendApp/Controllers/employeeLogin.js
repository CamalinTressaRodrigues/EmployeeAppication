const jwt = require('jsonwebtoken');
const employeeData = require('../model/employeeData');

const employeeLogin = async (req, res) => {
   // console.log(req.body);
    const { email, password } = req.body;
    //const value = req.body;
    const employee = await employeeData.findOne({ email })
    console.log(employee);
    if (!employee) {
        res.json({message:'User not found'})
    }
    try {
        if (employee.password == password) {
            const payload = { email: employee.email, pwd: employee.password }
            const token = jwt.sign(payload, 'EmployeeAppSecretKey');
            res.status(200).send({message:'Login successfull', token:token})
        }
        else {
            res.json({message:'User not found'})
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { employeeLogin };