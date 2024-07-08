import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmployeeLogin from './components/EmployeeLogin'
import AdminLogin from './components/AdminLogin'
import Employeelist from './components/Employeelist'
import Adminoperations from './components/Adminoperations'
import Main from './components/Main'
import Home from './components/Home'
import PrivateRouter from './components/PrivateRouter'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employee" element={<EmployeeLogin />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        <Route element={<PrivateRouter />}>
          <Route path="/employeelist" element={ <Main> <Employeelist /> </Main> } ></Route>
          <Route path="/operations" element={ <Main> <Adminoperations /> </Main> }></Route>
        </Route> 
      </Routes>
    </>
  );
}

export default App