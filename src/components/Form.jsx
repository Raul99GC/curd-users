import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useCreateCard from '../hooks/useCreateCard'

const Form = ({ getAllUsers, handleSubmit, register, reset, objUpdate, setObjUpdate }) => {



   const newUser = useCreateCard

   const defaultValuesForm = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
   }

   const submit = data => {



      newUser(data, getAllUsers)

   }

   return (


      <div className='box-form flex'>

         <div className="new-form flex">
            <form className='form' onSubmit={handleSubmit(submit)}>
               <div className="form__title"><h2>Bienvenido</h2></div>
               <div className="form__input-container ic1">
                  <input id="firstname" className="form__input" type="text"  {...register('first_name')} />
                  <div className="form__cut"></div>
                  <label htmlFor="firstname" className="form__placeholder">First name</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="lastname" className="form__input" type="text" {...register('last_name')} />
                  <div className="form__cut"></div>
                  <label htmlFor="lastname" className="form__placeholder">Last name</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="email" className="form__input" type="email" {...register('email')} />
                  <div className="form__cut form__cut--short"></div>
                  <label htmlFor="email" className="form__placeholder">Email</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="password" className="form__input" type="password" {...register('password')} />
                  <div className="form__cut "></div>
                  <label htmlFor="password" className="form__placeholder">Password</label>
               </div>
               <div className="form__input-container ic2">
                  <input id="date" className="form__input" type="date" {...register('birthday')} />
                  <div className="form__cut"></div>
                  <label htmlFor="date" className="form__placeholder">Birthday</label>
               </div>
               <button className="form__submit">submit</button>
            </form >
         </div>


      </div>
   )
}

export default Form