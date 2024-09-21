import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Orders from './Pages/Orders/Orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Pages/Update/Update'
import Users from './Pages/Users/Users'
import Updateuser from './Pages/Updateuser/Updateuser'

const App = () => {

  const url = 'http://localhost:4000';

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/' />
          <Route path='/add' element={<Add url={url } />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/orders' element={<Orders url={url} />} />
          <Route path='/update' element={<Update url={url} />} />
          <Route path='/users' element={<Users url={url} />} />
          <Route path='/usersupdate' element={<Updateuser url={url} />} />

        </Routes>
      </div>
    </div>
  )
}

export default App

