import axios from 'axios'
import React from 'react'
const URL = 'https://users-crud.academlo.tech/users/'

const useUpdate = async (id, data, getAllUsers, click) => {

  try {
    await axios.patch(`${URL}${id}/`, data)
    getAllUsers()
    click()

  } catch (error) {
    console.log(error)
  }
}

export default useUpdate