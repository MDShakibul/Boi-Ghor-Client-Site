import React, { useEffect, useState } from 'react';
import PopulerBook from './PopulerBook/PopulerBook';

const PopulerBooks = () => {
    const[books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div>
            <h1 className='text-center mt-3 text-primary mb-3'>Populer Books</h1>

            <div className='container'>
                <div className='row g-3'>
                {
                    books.slice(0, 3).map(book => <PopulerBook
                        key={book._id}
                        book={book}
                    ></PopulerBook>)
                } 
                </div>
            </div>
        </div>
    );
};

export default PopulerBooks;