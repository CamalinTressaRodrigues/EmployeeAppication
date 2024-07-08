const Employeelist = require('../model/employeelists');



const employeeList = async (req, res) => {
   // console.log(req.body);    
    try {
        const employeelist = await Employeelist.find({});   
        res.status(200).json(employeelist);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
}

module.exports = { employeeList };