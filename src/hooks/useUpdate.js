import axios from 'axios'
import React from 'react'

const useUpdate = (URL, id, objUpdate, setObjUpdate, getAllUsers) => {
  axios.patch(`${URL}${i}`, objUpdate)
  .then(res =>{
    console.log(res.data)
  })
  .catch(err = console.log(err))
}

export default useUpdate