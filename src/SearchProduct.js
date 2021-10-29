import React, { useState } from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'




function SearchProduct() {


   const [productsSearched, setProductsSearched] = useState('')
   const [searchedTerm, setSearchedTerm] = useState('')

   console.log(productsSearched)

   const handleSubmit = async (e) => {
      e.preventDefault();


      let result = await fetch(`http://localhost:8000/api/search/${searchedTerm}`, {
         method: "GET"
      });
      result = await result.json();
      console.log(result)
      setProductsSearched(result)

   }

   //On first click to show onlu this cause is empty
   if (!productsSearched) {
      return (
         <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
               <h1>Search Product</h1>
               <br />
               <form className='search-form' onSubmit={handleSubmit}>
                  <input type='text' className='form-control' placeholder='enter search term...'
                     onChange={(e) => setSearchedTerm(e.target.value)} />
                  <br />
                  <button className='btn btn-primary col-3' value="Submit" type="submit">Search</button>
               </form>
            </div>
            <br />
         </div >
      )
   }




   return (
      <div>
         <Header />
         <div className="col-sm-6 offset-sm-3">
            <h1>Search Product</h1>
            <br />
            <form className='search-form' onSubmit={handleSubmit}>
               <input type='text' className='form-control' placeholder='enter search term...' spellCheck="false"
                  onChange={(e) => setSearchedTerm(e.target.value)} />
               <br />
               <button className='btn btn-primary' value="Submit" type="submit">Search</button>
            </form>
            <br /> <br />

            <Table striped bordered hover>
               <thead>
                  <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Price $</th>
                     <th>Description</th>
                     <th>image</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>

                  {productsSearched.length > 0 ? (
                     // <div className="movie-grid">
                     productsSearched.map(product => {
                        return (
                           < tr key={product.id} >
                              <td>{product.id}</td>
                              <td>{product.name}</td>
                              <td>{product.price}</td>
                              <td>{product.description}</td>

                              <td>
                                 <img style={{ width: 70 }} src={"http://localhost:8000/" + product.file_path} alt={product.name} />
                              </td>
                              <td>
                                 <Link to={"/product/" + product.id} >Details</Link> /
                                 <Link to={"/edit/" + product.id} >Update</Link>
                              </td>
                           </tr >
                        )
                     }
                     )
                  ) : <h2 className="no-movies">No such product was found!!!</h2>
                  }
               </tbody>
            </Table>

         </div>

         <br />

      </div >
   )
}

export default SearchProduct
