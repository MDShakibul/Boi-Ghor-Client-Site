import useBooks from '../../../hooks/useBooks';
import UpcommingBook from './UpcommingBook/UpcommingBook';

const UpcommingBooks = () => {
    const[books, setBooks] = useBooks();
    return (
        <div>
            <h1 className='text-center mt-3 text-primary mb-3'>Upcomming Books</h1>

            <div className='container'>
                <div className='row g-3'>
                {
                    books.slice(3, 6).map(book => <UpcommingBook
                        key={book._id}
                        book={book}
                    ></UpcommingBook>)
                } 
                </div>
            </div>
        </div>
    );
};

export default UpcommingBooks;