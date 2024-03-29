import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnForm from './components/BtnForm'
import CardUser from './components/CardUser'
import useUsers from './hooks/useUsers'

const URL = 'https://users-crud.academlo.tech/users/'


const CrudUsers = () => {

  const { handleSubmit, register, reset } = useForm()
  const [objUpdate, setObjUpdate] = useState()
  const [clickBtnUser, setClicBtnUser] = useState(false)
  const users = useUsers(URL)


  const click = () => {
    if (!clickBtnUser) {
      setClicBtnUser(true)
    } else {
      setClicBtnUser(false)
      const obj = {}
      reset(obj)


    }
  }


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

      <div className="all-cards flex">
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

    </div>
  )
}

export default CrudUsers