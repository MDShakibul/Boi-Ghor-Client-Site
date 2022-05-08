
import useBooks from '../../../hooks/useBooks';
import PopulerBook from './PopulerBook/PopulerBook';

const PopulerBooks = () => {
    const[books, setBooks] = useBooks();
    
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