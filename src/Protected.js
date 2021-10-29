import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useHistory } from 'react-router-dom'

function Protected(props) {

   let CMP = props.Cmp

   const history = useHistory();

   //Check if there user, if not go to Register, else go to products
   useEffect(() => {
      if (!localStorage.getItem('user-info')) {
         history.push('/register');
      }
   }, [])

   return (
      <div>
         <CMP />

      </div>
   )
}

export default Protected
