import React from 'react';
import './Book.css'

const Book = ({book}) => {
    const {img, name, description, price, quantity, supplier} = book;
    return (
            <div className="col-lg-4 clo-sm-12">
                <div className="p-3 border bg-light">
                    <div className='book-img'>
                        <img src={img} alt=""/>
                    </div>
                    <h4 className='mt-3'>Name: {name}</h4>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Suplier:</strong> {supplier}</p>
                    <div className='d-flex justify-content-center'>
                    <button className='btn-update bg-success text-white px-3 py-2'>Update</button></div>
                </div>
            </div>
    );
};

export default Book;