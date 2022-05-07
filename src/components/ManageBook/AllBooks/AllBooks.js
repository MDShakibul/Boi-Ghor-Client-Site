import React from 'react';

const AllBooks = ({book}) => {
    const {_id,img, name, description, price, quantity, supplier} = book;

    const handelDelete = id=>{
        const proceed = window.confirm('Are you sure you want to delete it');

        if(proceed){
            const url = `http://localhost:5000/books/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => console.log(data))

        }
    }
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
                    <button onClick={() => handelDelete(_id)} className='btn-update bg-danger text-white px-3 py-2'>Delete</button></div>
                </div>
            </div>
    );
};

export default AllBooks;