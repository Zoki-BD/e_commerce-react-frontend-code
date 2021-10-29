import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';

function AddProduct() {

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [file, setFile] = useState('');


   useEffect(() => {
      (
         async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/user')
            console.log(response)
         }
      )();

   }, [])


   const handleSubmit = async (e) => {
      e.preventDefault();


      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);


      let result = await fetch('http://127.0.0.1:8000/api/addProduct', {
         method: 'POST',
         body: formData,

      })

      result = await result.json()

      //  history.push('/add');
      console.log(result)
      alert('Data has been updated')
   }


   return (
      <div>
         <Header />
         <div className="col-sm-6 offset-sm-3" >
            <br />
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
               <input type='text' className="form-control" placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} /><br />

               <input type='text' className="form-control" placeholder="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} /><br />

               <input type='text' className="form-control" placeholder="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} /><br />

               <input type='file' className="form-control" placeholder="file"
                  //value={file}
                  onChange={(e) => setFile(e.target.files[0])} /><br />


               <button type="submit" className="btn btn-primary">Add Product</button>
            </form>

         </div>
      </div >
   )
}

export default AddProduct
