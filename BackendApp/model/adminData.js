const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    email: String,
    password: String,
})

const AdminData = mongoose.model('adminData', adminSchema);
module.exports = AdminData;