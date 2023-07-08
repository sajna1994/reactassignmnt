import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmployeeForm from './components/EmployeeForm';
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
   <Routes>
   
    <Route path='/' exact element={<HomePage/>}/>
    <Route path='/employee-form' exact element={<EmployeeForm/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
