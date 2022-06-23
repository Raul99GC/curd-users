import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnForm from './components/BtnForm'
import CardUser from './components/CardUser'
import useUsers from './hooks/useUsers'



URL = 'https://users-crud1.herokuapp.com/users/'
const CrudUsers = () => {
   const { handleSubmit, register, reset } = useForm()
   const [objUpdate, setObjUpdate] = useState()
   const [clickBtnUser, setClicBtnUser] = useState(false)


   const click = () => {
      if (!clickBtnUser) {
         setClicBtnUser(true)
      } else {
         setClicBtnUser(false)
         const obj = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
         }
         reset (obj)
         

      }
   }


   const users = useUsers()

   return (
      <div className='CrudUsers flex'>

         <BtnForm
            URL={URL}
            getAllUsers={users.getAllUsers}
            handleSubmit={handleSubmit}
            register={register}
            reset={reset}
            objUpdate={objUpdate}
            setObjUpdate={setObjUpdate}
            clickBtnUser={clickBtnUser}
            click={click}
            setClicBtnUser={setClicBtnUser}
         />


         {
            users.users?.map(user => (
               <CardUser
                  URL={URL}
                  user={user}
                  key={user.id}
                  getAllUsers={users.getAllUsers}
                  click={click}
                  reset={reset}
                  setObjUpdate={setObjUpdate}
               />
            ))
         }
      </div>
   )
}

export default CrudUsers