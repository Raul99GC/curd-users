import React, { useState } from 'react'
import newUserIcon from '../assets/img/svg/newUser.svg'
import Form from './form'



const BtnForm = ({ getAllUsers, handleSubmit, register, reset, objUpdate, setObjUpdate, clickBtnUser, click }) => {




    console.log()
    return (

        <div div className="icon-form" >
            <a href="#" onClick={click}>
                <img className='icon-form__img' src={newUserIcon} alt="new user" />
            </a>


            {
                clickBtnUser &&
                <Form
                    getAllUsers={getAllUsers}
                    handleSubmit={handleSubmit}
                    register={register}
                    reset={reset}
                    objUpdate={objUpdate}
                    setObjUpdate={setObjUpdate}

                />
            }
        </div>

    )
}

export default BtnForm