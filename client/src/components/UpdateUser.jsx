import React , {useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function UpdateUser() {
    const {id} = useParams();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge]= useState(1)
    const navigate = useNavigate();
    

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/' + id)
        .then((result) => {
            console.log(result)
          setName(result.data.name);
          setEmail(result.data.email);
          setAge(result.data.age);
        }) 
        .catch((err) => console.log(err))
    }, [])
    const handle = () =>{
        axios.put('http://localhost:3001/updateUser/'+id, {name,email,age})
        .then((result) => console.log(result))
        .catch((err) => console.log('error while updating' ,err))
        navigate('/') 
    }
  return (
    <div>
    <div>
      <form onSubmit={handle}>
          <h2>update user</h2>
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

export default UpdateUser
