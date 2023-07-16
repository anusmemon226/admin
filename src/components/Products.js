import React from 'react'
import "../assets/css/Products.css"
import productImage from "../assets/images/product.jpg"
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import AddProductModal from './AddProductModal'
import EditProductModal from './EditProductModal'
function Products() {
  return (
    <>
      <AddProductModal/>
      <EditProductModal/>
      <div className='product-section container'>
        <div className="product-section-row row">
          <div className="product-section-col col-12">
            <div className="addProduct">
              <h1>Add Product</h1>
              <button type="button" data-bs-toggle="modal" data-bs-target="#addProduct">Add Product</button>
            </div>
          </div>
        </div>

        <div className="product-table-row row">
          <div className="col-12 product-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Id</th>
                  <th>Thumbnail</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-center'><input type="checkbox" name="" id="" /></td>
                  <td>1</td>
                  <td><img src={productImage} alt="" /></td>
                  <td>Product Name</td>
                  <td>Product Category</td>
                  <td>Product Price</td>
                  <td>Product Quantity</td>
                  <td>Product Status</td>
                  <td><Link className='mx-1 text-dark'  type="button" data-bs-toggle="modal" data-bs-target="#editProduct"><FontAwesomeIcon icon={faEdit}/></Link><Link className='mx-1 text-dark'><FontAwesomeIcon icon={faTrash}/></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Products
