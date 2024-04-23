import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/createUser' element={<CreateUser />}></Route>
          <Route path='/updateUser/:id' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
