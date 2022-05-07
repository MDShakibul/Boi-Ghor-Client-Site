import React from 'react';
import useBooks from '../../../hooks/useBooks';
import Book from './Book/Book';

const Books = () => {
    const[books] = useBooks();
   /*  {
        products.slice(0, 6).map(product => <Product
            key={product._id}
            product={product}
        ></Product>)
    } */
    return (
        <div>
            <h1 className='text-center mt-3 text-primary mb-3'>Book Store</h1>

            <div className='container'>
                <div className='row g-3'>
                {
                    books.slice(0, 6).map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)
                } 
                </div>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <button className='btn-update px-4 py-3 bg-primary text-white'>All Books</button>
            </div>
        </div>
    );
};

export default Books;