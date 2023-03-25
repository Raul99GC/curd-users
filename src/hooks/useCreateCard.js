import React from 'react'
import axios from 'axios'

const URL = 'https://users-crud.academlo.tech/users/'

const useCreateCard = async (data, getAllUsers) => {
  console.log(data)

  // axios.post(URL, data)
  //     .then(res => {
  //         console.log('se logro')
  //         console.log(res.data)
  //         getAllUsers()


  //     })
  //     .catch(err => console.log(err))

  try {
    const res = await axios.post(URL, data)
    getAllUsers()
    console.log(res.response.status)
    
  } catch (error) {
    console.log(error)
  }
}

export default useCreateCard