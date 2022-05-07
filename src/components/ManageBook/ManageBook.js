import React from 'react';
import useBooks from '../../hooks/useBooks';
import { Link } from 'react-router-dom';
import AllBooks from './AllBooks/AllBooks';

const ManageBook = () => {
    const[books] = useBooks();
    return (
        <div>
            <h1 className='text-center mt-3 text-primary mb-3'>All Books</h1>

            <div className='d-flex justify-content-center mt-4 mb-4'>
                <Link to="/manage-book">
                    <button className='btn-update px-4 py-3 bg-primary text-white '>Add Book</button>
                </Link>
            </div>

            <div className='container'>
                <div className='row g-3'>
                {
                    books.map(book => <AllBooks
                        key={book._id}
                        book={book}
                    ></AllBooks>)
                } 
                </div>
            </div>
            
        </div>
    );
};

export default ManageBook;