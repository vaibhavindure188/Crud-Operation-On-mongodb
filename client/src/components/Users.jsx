import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
function Users() {
    const [users, setUsers] = useState([{name:"vaibhav", email:"vaibhav@gmail.com" , age: 21}])
    

    useEffect(()=>{
        axios.get("http://localhost:3001/")
        .then((result) => {setUsers(result.data) 
          console.log(result)
        }) 
        .catch((err) => console.log(err))
    }, [])

    const handleDelete = (id) =>{
        
        axios.delete('http://localhost:3001/deleting/' + id)
        .then((result) => console.log(result))
        .catch((err) => console.log('error while deleting ', err))
    }
  return (
    <div>
    <Link to="/createUser">Add+</Link>
      <div>
        <table>
            <thead>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>age</td>
                    <td>action</td>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user) =>{
                        return <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td>
                                <Link to={`/updateUser/${user._id}`} >edit</Link>
                                <button onClick={()=>handleDelete(user._id)}>delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Users
