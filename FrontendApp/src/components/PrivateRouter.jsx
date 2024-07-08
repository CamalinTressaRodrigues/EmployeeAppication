import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const token = localStorage.getItem('token');
  let verifyUser = false;
  if (token) {
    verifyUser = true;
  }
  return verifyUser ? <Outlet /> : <Navigate to={'/'}></Navigate>;
};

export default PrivateRouter;
