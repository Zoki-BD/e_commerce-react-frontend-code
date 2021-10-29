import React, { useEffect, useState } from 'react'
import Header from './Header';
import { useParams } from "react-router";


function UpdateProduct() {

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [file, setFile] = useState('');

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



   const handleSubmit = async (e) => {
      e.preventDefault();


      //
      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);


      let result = await fetch(`http://127.0.0.1:8000/api/edit/${id}`, {
         method: 'POST',
         body: formData,
         //no headers with form-data in postman
      })

      result = await result.json()

      //  history.push('/add');
      console.log(result)
      alert('Data has been updated')
   }


   return (
      <div>
         <Header />
         {/* must be defaultValue to be able to change the props */}
         <div className="col-sm-6 offset-sm-3" >
            <br />
            <h1>Update Product</h1>
            <form onSubmit={handleSubmit}>
               <input type='text' className="form-control" placeholder="name"
                  defaultValue={singleProduct.name}
                  onChange={(e) => setName(e.target.value)} /><br />

               <input type='text' className="form-control" placeholder="price"
                  defaultValue={singleProduct.price}
                  onChange={(e) => setPrice(e.target.value)} /><br />

               <input type='text' className="form-control" placeholder="description"
                  defaultValue={singleProduct.description}
                  onChange={(e) => setDescription(e.target.value)} /><br />

               <input type='file' className="form-control" placeholder="file"

                  defaultValue={singleProduct.file_path}

                  onChange={(e) => setFile(e.target.files[0])} /><br />
               <img style={{ maxWidth: 100 }} className="card-img-top" src={"http://localhost:8000/" + singleProduct.file_path} alt={singleProduct.name} /><br />
               <br />

               <button type="submit" className="btn btn-primary">Update Product</button>
            </form>

         </div>

      </div >
   )
}

export default UpdateProduct
