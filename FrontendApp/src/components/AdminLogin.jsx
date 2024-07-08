import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import '../css/login.css'

const AdminLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  function capValue() {
    axios
      .post('https://employee-appication-server.vercel.app/admin/login', user)
      .then((res) => {
        console.log(res.data.message);
        alert(res.data.message);
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          navigate('/operations');
        }
      });
  }
  return (
    <div className='login_page'>
      <div className='login_container'>
        <Typography variant="h3" className='login_title'>
          Admin Login
        </Typography>
        <br />
        <br />
        <TextField
          variant="outlined"
          label="Email"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          label="Password"
          name="Password"
          type="password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <br />
        <br />
        <Button variant="contained" onClick={capValue}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;
