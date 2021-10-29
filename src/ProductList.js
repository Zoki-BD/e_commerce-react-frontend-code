import React, { useState, useEffect } from 'react'
import Header from './Header';
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SIngleProduct from './SIngleProduct';



function ProductList() {


   const [data, setData] = useState([]);


   useEffect(async () => {

      getData();
   }, [])

   console.log(data)


   const deleteProduct = async (id) => {
      let result = await fetch(`http://localhost:8000/api/delete/${id}`, {
         method: "GET"
      });
      result = await result.json();
      getData()
   }


   const getData = async () => {
      let result = await fetch('http://localhost:8000/api/products');
      result = await result.json();
      setData(result);
   }



   return (
      <div>
         <Header />
         <h1>Product List</h1>
         <div className='col-sm-8 offset-2'>
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

                  {
                     data.map(product => {
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
                                 <button className="button"
                                    onClick={() => deleteProduct(product.id)}
                                 >Delete
                                 </button>
                                 <Link to={"/product/" + product.id} >Details</Link>
                                 <Link to={"/edit/" + product.id} >Update</Link>
                              </td>
                           </tr >
                        )
                     }
                     )
                  }

                  {/* Same but cleaner
                {   
                  data.map(product =>

                     < tr key={product.id} >
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.file_path}</td>
                     </tr >
                  )
   } */}



               </tbody>
            </Table>

         </div>

      </div >
   )
}

export default ProductList
