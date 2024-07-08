const mongoose = require('mongoose');
const employeeschema = mongoose.Schema({
    name: String,
    email: String,
    position: String,
    location: String
})

const employeelist = mongoose.model('employeelist', employeeschema);
module.exports = employeelist;