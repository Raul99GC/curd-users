import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardUser from './components/CardUser'



URL = 'https://users-crud1.herokuapp.com/users/'
const CrudUsers = () => {

   const [users, setUsers] = useState()

   const getAllUsers = () => {
      axios.get(URL)
         .then(res => setUsers(res.data))
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getAllUsers()
   }, [])

  



   return (
      <div className='CrudUsers flex'>
         {
            users?.map(user => (
               <CardUser
                  user={user}
                  key={user.id}
                  getAllUsers={getAllUsers}
               />
            ))
         }
      </div>
   )
}

export default CrudUsers