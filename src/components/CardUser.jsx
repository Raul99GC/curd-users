import React, { useState } from 'react'
import axios from 'axios'
import useCreateCard from '../hooks/useCreateCard'



const CardUser = ({ user, getAllUsers, clickUp }) => {


    const deleteUser = (id) => {
        const URL = 'https://users-crud1.herokuapp.com/users/'
        axios.delete(`${URL}${id}/`)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    // const createUser = useCreateCard(aquiVaAlgo)


    return (
        <article className='card-user flex'>
            <div className="card-user__settings">
                <a href="#"><i className='bx bx-dots-vertical-rounded card-user__icon-setting'></i></a>
                <div className="card-user__menu flex">
                    <ul className='card-user__ul flex'>
                        <li><button  className='card-user__button'><i className='bx bxs-edit-alt card-user__icon-li'></i></button> </li>
                        <li><button onClick={() => deleteUser(user.id)} className='card-user__button'><i className='bx bxs-folder-minus card-user__icon-li'></i></button> </li>
                    </ul>
                </div>
            </div>
            <div className="card-user__name-box flex">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
            </div>

            <div className="card-user__inf flex">
                <p className='card-user__p flex'><b>Email: </b>{`${user.email}`}</p>
                <p className='card-user__p flex'><b>Cumpleaños: </b>{`${user.birthday}`}</p>
            </div>
        </article>
    )
}

export default CardUser