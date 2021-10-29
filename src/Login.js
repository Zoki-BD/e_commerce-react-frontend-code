import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useHistory } from 'react-router-dom'

function Login() {

   const history = useHistory();


   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');

   useEffect(() => {
      if (localStorage.getItem('user-info')) {
         history.push('/add');
      }
   }, [])


   const handleSubmit = async (e) => {
      e.preventDefault();

      let user = { email, password }

      let result = await fetch('http://127.0.0.1:8000/api/login', {
         method: 'POST',
         body: JSON.stringify(user),
         headers: {
            "Content-Type": 'aplication/json',
            "Accept": 'aplication/json',
         }
      })
      result = await result.json()

      localStorage.setItem('user-info', JSON.stringify(result))
      history.push('/add');

      console.log(result.name)
   }




   return (
      <div>

         <div className="container">
            <Header />
            <div className="row">
               <h1>Login page</h1>
               <form onSubmit={handleSubmit}>

                  <input type="password" className="form-control" placeholder="enter password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)} />
                  <br />
                  <input type="email" className="form-control" placeholder="enter email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)} />
                  <br />
                  <button type="submit" className="btn btn-primary">Login</button>
               </form>
            </div>
         </div>
      </div>
   )

}
export default Login
