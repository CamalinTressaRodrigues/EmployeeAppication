import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';

import { useEffect, useState } from 'react';
import axiosInstance from '../axiosinterceptor';


const Employeelist = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            axiosInstance.get('/employee/employeelist').then((res) => {
                //console.log(res.data);
                setData(res.data);
            });
        }, []);

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
      <Box
        sx={{
          backgroundImage:'url(https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: 3,
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="customized table">
          <TableHead>
            
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Position</StyledTableCell>
              <StyledTableCell align="center">Location</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center">{item.email}</StyledTableCell>
                <StyledTableCell align="center">{item.position}</StyledTableCell>
                <StyledTableCell align="center">{item.location}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    );

    }
export default Employeelist