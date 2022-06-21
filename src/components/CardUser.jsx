import React from 'react'

const CardUser = ({ user }) => {
    console.log(user)
    return (
        <article className='card-user flex'>
            <div className="card-user__name-box">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
            </div>

            <div className="card-user__inf">
                <p><b>Email: </b>{`${user.email}`}</p>
                <p><b>Cumpleaños: </b>{`${user.birthday}`}</p>
            </div>
        </article>
    )
}

export default CardUser