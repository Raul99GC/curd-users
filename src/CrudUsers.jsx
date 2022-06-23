import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnForm from './components/BtnForm'
import CardUser from './components/CardUser'
import Form from './components/Form'
import useUsers from './hooks/useUsers'



URL = 'https://users-crud1.herokuapp.com/users/'
const CrudUsers = () => {
   const { handleSubmit, register, reset } = useForm()
   const [objUpdate, setObjUpdate] = useState()
   const [clickBtnUser, setClicBtnUser] = useState(false)
   const click = () => {
      console.log('boton')
      if (!clickBtnUser) {
         setClicBtnUser(true)
      } else {
         setClicBtnUser(false)
      }
   }


   const users = useUsers()

   return (
      <div className='CrudUsers flex'>

         <BtnForm
            getAllUsers={users.getAllUsers}
            handleSubmit={handleSubmit}
            register={register}
            reset={reset}
            objUpdate={objUpdate}
            setObjUpdate={setObjUpdate}
            clickBtnUser={clickBtnUser}
            click={click}

         />


         {
            users.users?.map(user => (
               <CardUser
                  user={user}
                  key={user.id}
                  getAllUsers={users.getAllUsers}
               />
            ))
         }
      </div>
   )
}

export default CrudUsers