
import { Button, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../css/homepage.css'; // Import the stylesheet

const Home = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  const handleEmployeeLogin = () => {
    navigate('/employee');
  };

  return (
    <div className="home_page">
      <Container maxWidth="md" className="content-container">
        <Typography variant="h2" className="title">
          Welcome to Expressway
        </Typography>
        <br />
        <Typography variant="h5" className="subtitle">
          Empowering Employees, Enhancing Business
        </Typography>
        <br />
        <br />
        <Box className="buttons-container">
          <Button
            variant="contained"
            
            className="login-button"
            onClick={handleAdminLogin}
          >
            Admin Login
          </Button>
          <Button
            variant="contained"
            
            className="login-button"
            onClick={handleEmployeeLogin}
          >
            Employee Login
          </Button>
        </Box>
        <Box className="about-company">
          <Typography variant="h4" className="about-title">
            About Expressway
          </Typography>
          <br />
          <Typography variant="body1" className="about-text">
            Our company is committed to providing the best services and creating
            an inclusive work environment. We believe in the potential of every
            employee and strive to foster growth and innovation.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
