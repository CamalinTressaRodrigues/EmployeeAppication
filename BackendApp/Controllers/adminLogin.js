const jwt = require('jsonwebtoken');
const adminData = require('../model/adminData')


const adminLogin = async (req, res) => {
   // console.log(req.body);
    const { email, password } = req.body;
    //const value = req.body;
    const admin = await adminData.findOne({ email })
    console.log(admin);
    if (!admin) {
        res.json({message:'User not found'})
    }
    try {
        if (admin.password == password) {
            const payload = { email: admin.email, pwd: admin.password }
            const token = jwt.sign(payload, 'AdminAppSecretKey');
            res.status(200).send({message:'Login successfull', token:token})
        }
        else {
            res.json({message:'User not found'})
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { adminLogin };