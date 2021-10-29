import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Header from './Header';



function Register() {


   useEffect(() => {
      if (localStorage.getItem('user-info')) {
         history.push('/add');
      }
   }, [])



   const [name, setName] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   const history = useHistory();

   const handleSubmit = async (e) => {
      e.preventDefault();

      let user = { name, email, password, username } //ova e E6 skratenoto koe e kako dole po staro
      //let user = { name: name, email: email .....itn

      let result = await fetch('http://127.0.0.1:8000/api/register', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            "Content-Type": 'aplication/json',
            "Accept": 'aplication/json'

         }
      })

      // let result = await axios.post('http://127.0.0.1:8000/api/register', {
      //    name: name,
      //    email: email,
      //    username: username,
      //    password: password
      // })


      // result = await result.json()
      localStorage.setItem('user-info', JSON.stringify(result.data))
      //to save user like object in LS
      //with axios is result.data
      history.push('/add');

      console.log(result)
   }



   return (
      <div className="container">
         <Header />
         <div className="row">
            <h1>Register page</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" className="form-control" placeholder="enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
               <br />
               <input type="text" className="form-control" placeholder="enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
               <br />
               <input type="password" className="form-control" placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
               <br />
               <input type="email" className="form-control" placeholder="enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
               <br />
               <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
         </div>
      </div>
   )
}

export default Register
