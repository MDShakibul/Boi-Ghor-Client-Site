import React from 'react';
import useBooks from '../../../hooks/useBooks';

const Books = () => {
    const[books] = useBooks();
    return (
        <div>
        <h1>This is books: {books.length}</h1>
        </div>
    );
};

export default Books;