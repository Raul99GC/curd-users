import axios from 'axios'
import React from 'react'
const URL = 'https://users-crud1.herokuapp.com/users/'

const useUpdate = ( id, data, getAllUsers, click) => {
    console.log('en el axios')
    console.log(id)
    axios.patch(`${URL}${id}/`, data)
        .then(res => {

            console.log('si se logro')
            console.log(res.data)
            getAllUsers()
            click()

        })
        .catch(err = console.log(err))
}

export default useUpdate