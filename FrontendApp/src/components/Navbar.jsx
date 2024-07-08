import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              Employee App
            </Typography>
            {/* <Link to={'/'}>
              <Button color="inherit" style={{ color: 'white' }}>
                Home
              </Button>
            </Link> */}
            {/* <Link to={'/employeelist'}>
              <Button color="inherit" style={{ color: 'white' }}>
                Employee List
              </Button>
            </Link> */}
            <Link to={'/'}>
              <Button
                color="inherit"
                style={{ color: 'white' }}
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/');
                }}
              >
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
