import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register"
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TaskDetail from './pages/TaskDetail';




function App() {


  return (
  <Router>
    <Routes>
      <Route path='/login' element={<Login/>}/>,
      <Route path='/board' element={<Dashboard/>} />
       <Route path='/register' element={<Register/>} />
        <Route path='task/:id' element={<TaskDetail/>} />
    </Routes>
  </Router>
  // <Register/>
  )
}

export default App
