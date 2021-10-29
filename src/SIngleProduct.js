import React, { useState, useEffect } from 'react'
import Header from './Header';
import { useParams } from "react-router";



function SIngleProduct() {

   const [singleProduct, setSingleProduct] = useState('');

   const { id } = useParams();
   console.log(id)


   useEffect(() => {
      showSingleProduct(id)
   }, [])

   const showSingleProduct = async (id) => {
      let result = await fetch(`http://localhost:8000/api/product/${id}`, {
         method: "GET"
      });
      result = await result.json();
      console.log(result)
      setSingleProduct(result)
   }

   console.log(singleProduct)

   const { name, file_path, description, price } = singleProduct;



   return (
      <div>
         <Header />
         <div className="shop">

            <div className="row">

               <div className="col-lg-8 col-md-6 mb-4">
                  <div className="card h-100 center">
                     <img style={{ maxWidth: 500 }} className="card-img-top" src={"http://localhost:8000/" + file_path} alt={name} />
                     <div className="card-body">
                        <h4 className="card-title">
                           <a href="#">{name}</a>
                        </h4>
                        <h5>$ {price} </h5>
                        <p className="card-text">{description}</p>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                     </div>
                     <div className="overlay"></div>

                  </div>
               </div>
            </div>
         </div>
      </div >
   )

}

export default SIngleProduct
