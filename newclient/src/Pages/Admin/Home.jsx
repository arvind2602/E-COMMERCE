import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AdminHome = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    // const [image, setImage] = useState('')
    const [quantity, setQuantity] = useState('')
    const [category, setCategory] = useState('')
    const [records, setRecords] = useState([]);


    async function HandleAddProduct(e) {
        e.preventDefault();
        await axios.post('http://localhost:5000/admin/products/add', { name, description, price, quantity, category }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        getRecords();
    }
    async function getRecords() {
        await axios.get('http://localhost:5000/admin/products').then((res) => {
            setRecords(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getRecords();
    }, []);


    return (
        <>
            <div>Admin Home</div>
            <a href='/admin/login'>Login</a>
            <a href='/admin/register'>Register</a>
            <button>Logout</button>


            <form onSubmit={HandleAddProduct} encType='multipart/form-data'>
                <input type='text' placeholder='Product Name' name="name" onChange={(e) => { setName(e.target.value) }} />
                <input type='text' placeholder='Product Description' name="description" onChange={(e) => { setDescription(e.target.value) }} />
                <input type='text' placeholder='Product Price' name="price" onChange={(e) => { setPrice(e.target.value) }} />
                <input type='number' placeholder='Product Quantity' name="quantity" onChange={(e) => { setQuantity(e.target.value) }} />
                <select onChange={(e) => { setCategory(e.target.value) }}>
                    <option name="category" value='Select Category' defaultChecked>Select Category</option>
                    <option name="category" value='Shoes'>Shoes</option>
                    <option name="category" value='Sandals'>Sandals</option>
                    <option name="category" value='Chappels'>Chappels</option>
                </select>
                {/* <input type='file' placeholder='Product Image' onChange={(e) => { setImage(e.target.value) }} /> */}
                <button type='Submit' >Add Product</button>
            </form>
            <div>
                {/* List of products in table form */}
                <table>
                    <thead>
                        <tr>
                            <th>Sr.</th>
                            <th>Product Name</th>
                            <th>Product Description</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Product Category</th>
                            {/* <th>Product Image</th> */}
                        </tr>
                    </thead>
                    <tbody>{records.toReversed().map((records, i) => (
                        <tr>
                            <td>{i}</td>
                            <td>{records.name}</td>
                            <td>{records.description}</td>
                            <td>{records.price}</td>
                            <td>{records.quantity}</td>
                            <td>{records.category}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default AdminHome