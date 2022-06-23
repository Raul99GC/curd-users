import React from 'react'
import axios from 'axios'
const URL = 'https://users-crud1.herokuapp.com/users/'
const useCreateCard = (newUser, getAllUsers) => {


    axios.post(URL, newUser)
        .then(res => {
            console.log(res.data)
            getAllUsers()
        })
        .catch(err => console.log(err))
}

export default useCreateCard