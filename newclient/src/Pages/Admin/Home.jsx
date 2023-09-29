import React, { useState } from 'react'


const AdminHome = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    function HandleAddProduct() {


    }
    return (
        <>
            <div>Admin Home</div>
            <a href='/admin/login'>Login</a>
            <a href='/admin/register'>Register</a>
            <button>Logout</button>


            <form onSubmit={HandleAddProduct} encType='multipart/form-data'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                <input type='text' placeholder='Product Name' name="name" onChange={(e) => { setName(e.target.value) }} />
                <input type='text' placeholder='Product Description' name="description" onChange={(e) => { setDescription(e.target.value) }} />
                <input type='text' placeholder='Product Price' name="price" onChange={(e) => { setPrice(e.target.value) }} />
                <input type='text' placeholder='Product Quantity' name="quantity" onChange={(e) => { setQuantity(e.target.value) }} />
                <select onChange={(e) => { setCategory(e.target.value) }}>
                    <option name="category" value='Select Category' defaultChecked>Select Category</option>
                    <option name="category" value='Shoes'>Shoes</option>
                    <option name="category" value='Sandals'>Sandals</option>
                    <option name="category" value='Chappels'>Chappels</option>
                </select>
                <input type='file' placeholder='Product Image' onChange={(e) => { setImage(e.target.value) }} />
                <button type='Submit' >Add Product</button>
            </form>
            <div>
                <h1 id='name'></h1>
                <p id='description'></p>
                <h3 id='price'></h3>
                <img id='image' src='' alt=''></img>

            </div>

        </>
    )
}

export default AdminHome