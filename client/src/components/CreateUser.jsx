import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge]= useState()
    const navigate = useNavigate();
    const handle = () =>{
        
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then((result) => {
            console.log(result)
            
        })
        .catch(err=>console.error(err))

        navigate('/')
    }
  return (
    <div>
      <div>
        <form onSubmit={handle}>
            <h2>Add user</h2>
            <div>
                <label htmlFor=''>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name' required/>
            </div>

            <div>
                <label htmlFor=''>email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' required/>
            </div>

            <div>
                <label htmlFor=''>age</label>
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='enter age' required/>
            </div>
            <button type='submit' >submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
