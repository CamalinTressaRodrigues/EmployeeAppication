const employeeList= require('../model/employeelists')


const addEmployee = async (req, res) => {
    try {
        //  console.log(req.body);
        var newEmployee = {
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            location: req.body.location
        }
        var employee = new employeeList(newEmployee)
        await employee.save()
        res.status(201).json(newEmployee)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
}
}


const getEmployee = async (req, res) => {
    try{
        const employee = await employeeList.find({});
        res.status(200).json(employee);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
}


const updateEmployee = async (req, res) => {
    try{
        const employee = await employeeList.findByIdAndUpdate( req.params.id,req.body, {new:true});
        res.status(200).json(employee);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
}

const deleteEmployee = async (req, res) => {
    try{
        await employeeList.findByIdAndDelete( req.params.id);
        res.status(200).json({message: "Employee Data deleted successfully"});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
}



module.exports ={ addEmployee, getEmployee, updateEmployee , deleteEmployee }   