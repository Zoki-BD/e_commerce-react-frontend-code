import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useHistory } from 'react-router-dom'




function Logout() {

   const history = useHistory();


   useEffect(() => {
      if (localStorage.getItem('user-info')) {
         localStorage.removeItem('user-info')
         history.push('/');
      }
   }, [])


   return (
      <div>
         Logout
      </div>
   )
}

export default Logout
