import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useUsers = (URL) => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        try {
            const res = await axios.get(URL)
            setUsers(res.data)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return { users, getAllUsers, setUsers }
}

export default useUsers