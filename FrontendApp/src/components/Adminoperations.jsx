import { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';
import axiosInstance from '../axiosinterceptor';

const Adminoperations = () => {
  //get data
  const [data, setData] = useState([]);
  // get employee list
  useEffect(() => {
    axiosInstance.get('/admin/list')
      .then((res) => {
      //console.log(res.data);
      setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  
  //add data 
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    position: '',
    location:''
  });
  const [openAdd, setOpenAdd] = useState(false);

  //add new employee details
   const handleOpenAddDialog = () => {
     setOpenAdd(true);
   };

   const handleCloseAddDialog = () => {
     setNewEmployee({ name: '', email: '', position:'', location:'' });
     setOpenAdd(false);
   };

   const handleAddInputChange = (e) => {
     const { name, value } = e.target;
     setNewEmployee({ ...newEmployee, [name]: value });
   };
  
  const handleAdd = async () => {
    try {
      const response = await axiosInstance.post('/admin/add', newEmployee);
      setData([...data, response.data]);
      handleCloseAddDialog();
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  //update data
  const [updateEmployee, setEmployeeUpdate] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(false);

  // employee data update operations
  const handleOpenUpdateDialog = (employee) => {
    setEmployeeUpdate(employee);
    setOpenUpdate(true);
  };

  const handleCloseUpdateDialog = () => {
    setEmployeeUpdate(null);
    setOpenUpdate(false);
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeUpdate({ ...updateEmployee, [name]: value });
  };

  const handleUpdate = async () => {
      try {
        await axiosInstance.patch(
          `/admin/update/${updateEmployee._id}`,
          updateEmployee
        );
        setData(
          data.map((emp) =>
            emp._id === updateEmployee._id ? updateEmployee : emp
          )
        );
        handleCloseUpdateDialog();
      } catch (error) {
        console.error('Error updating employee:', error);
      }
  };

  //deleting employee details
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/admin/delete/${id}`);
      setData(data.filter((employee) => employee._id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
  
 //styling table
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'url(https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: 3,
        }}
      >
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddDialog}
        >
        + Add Employee
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Position</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item._id}>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">{item.position}</StyledTableCell>
                <StyledTableCell align="center">{item.location}</StyledTableCell>
                <StyledTableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => handleOpenUpdateDialog(item)} style={{ marginRight: '10px' }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(item._id)}>
                      Delete
                    </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* updating employee details */}
      <Dialog open={openUpdate} onClose={handleCloseUpdateDialog}>
        <DialogTitle>Edit Employee</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={updateEmployee?.name || ''}
              onChange={handleUpdateInputChange}
            />
            <TextField
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={updateEmployee?.email || ''}
              onChange={handleUpdateInputChange}
            />
            <TextField
              margin="dense"
              name="position"
              label="Position"
              type="text"
              fullWidth
              value={updateEmployee?.position || ''}
              onChange={handleUpdateInputChange}
            />
            <TextField
              margin="dense"
              name="location"
              label="Location"
              type="text"
              fullWidth
              value={updateEmployee?.location || ''}
              onChange={handleUpdateInputChange}
            />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseUpdateDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Employee details */}
      <Dialog open={openAdd} onClose={handleCloseAddDialog}>
        <DialogTitle> Add Employee</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={newEmployee.name}
            onChange={handleAddInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={newEmployee.email}
            onChange={handleAddInputChange}
          />
          <TextField
            margin="dense"
            name="position"
            label="Position"
            type="text"
            fullWidth
            value={newEmployee.position}
            onChange={handleAddInputChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            value={newEmployee.location}
            onChange={handleAddInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary"> Cancel </Button>
          <Button onClick={handleAdd} color="primary"> Add </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </>
  );
};

export default Adminoperations;