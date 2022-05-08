import React from 'react';

const MyBook = ({book}) => {
    const {email, img, name, description, price, quantity, supplier} = book;
    return (
        <div className="col-lg-4 clo-sm-12">
                <div className="p-3 border bg-light">
                    <div className='book-img'>
                        <img src={img} alt=""/>
                    </div>
                    <h4 className='mt-3'>Name: {name}</h4>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price} Taka</p>
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Supplier:</strong> {supplier}</p>
                    
                </div>
            </div>
    );
};

export default MyBook;