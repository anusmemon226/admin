import React, { useState } from 'react'
import { createPortal } from 'react-dom'
function AddProductModal() {
  const [thumbnail,setThumbnail] = useState();

  const handleThumbnail = (e)=>{
    let url = URL.createObjectURL(e.target.files[0])
    setThumbnail(url)
  }
  return (
    createPortal(
        <div className="modal fade" id="addProduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="product-name">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder='Enter Product Name'/>
                </div>
                <div className="category-section">
                    <label htmlFor="">Category</label>
                    <select name="" id="">
                        <option value="">Select Category</option>
                    </select>
                </div>
                <div className="price-qty">
                    <div className="price">
                        <label htmlFor="">Enter Price</label>
                        <input type="number" />
                    </div>
                    <div className="qty">
                        <label htmlFor="">Quantity</label>
                        <input type="number" min={0}/>
                    </div>
                </div>
                <div className="status">
                    <label htmlFor="">Status</label>
                    <div className="status-control">
                        <input type="radio" name="status" id="" />
                        <label htmlFor="">Active</label>
                        <input type="radio" name="status" id="" />
                        <label htmlFor="">Unactive</label>
                    </div>
                </div>
                <div className="product-image">
                    <label htmlFor="">Product Image</label>
                    <input type="file" onChange={handleThumbnail} name="" id="" />
                </div>
                <div className="thumbnail">
                  <img src={thumbnail} alt="" />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn text-light" style={{backgroundColor:"#e7ab3c"}}>Add Product</button>
              </div>
            </div>
          </div>
        </div>,document.getElementById("addProductModal"))
  )
}

export default AddProductModal
