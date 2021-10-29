import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {

   const [user, setUser] = useState('')

   //To have the user from LS
   const korisnik = JSON.parse(localStorage.getItem('user-info'));


   useEffect(() => {
      if (!localStorage.getItem('user-info')) {
         setUser('user')
      }
      else {
         setUser(korisnik.user.name)
      }
   }, [])

   return (
      <div>
         <>
            <Navbar bg="dark" variant="dark">
               <Container>
                  <Navbar.Brand href="/list">E-Commerce</Navbar.Brand>
                  <Nav className="me-auto navbar-wrapper">
                     {

                        localStorage.getItem('user-info')
                           ?
                           <>
                              <Link to="/list" >Product List</Link>
                              <Link to="/add" >Add Product</Link>
                              <Link to="/edit/id" >Update Product</Link>
                              <Link to="/search" >Search</Link>


                              <NavDropdown className="navbarot" title={user}>
                                 <NavDropdown.Item >
                                    <Link to="/logout" >Logout</Link>
                                 </NavDropdown.Item>
                              </NavDropdown>


                           </>
                           :
                           <>
                              <Link to="/" >Login</Link>
                              <Link to="/register" >Register</Link>
                           </>
                     }
                  </Nav>

               </Container>
            </Navbar>

         </>
      </div>
   )
}

export default Header
