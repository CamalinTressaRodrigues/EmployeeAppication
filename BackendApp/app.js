//require express
const express = require('express');
const app = express();
//require morgan
const morgan = require('morgan');
app.use(morgan('dev'));
//require dotenv
require('dotenv').config();
//require cors
const cors = require('cors');
app.use(cors());
//routing
const path = require('path');
//connecting database
require('./db/mongoDb');
//routes
const employeeDataRoute = require('./routes/employeeDataRoute');
const employeelistRoute = require('./routes/employeelistRoute.js');
const adminDataRoute = require('./routes/adminDataRoute.js');
const adminCRUDoperations= require('./routes/adminCRUDRoute.js')

//routing - employee
app.use('/employee', employeeDataRoute);
app.use('/employee', employeelistRoute);


//routing -admin
app.use('/admin', adminDataRoute);
app.use('/admin', adminCRUDoperations);

app.use(cors({
    origin: ['https://employee-appication-client.vercel.app/'],
    credentials: true,
    methods: ['POST', 'GET', 'PATCH', 'DELETE']
}));

//deployment
app.use(express.static(path.join(__dirname, 'dist')));

// Anything that doesn't match the above, send back index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`server is listening on PORT ${process.env.PORT}`);
})