const mongoose = require('mongoose');
const schema = mongoose.Schema({
    email: String,
    password: String,
})

const employeeData = mongoose.model('employeedata', schema);
module.exports = employeeData;