import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://powerful-harbor-56786.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return [books, setBooks];
}

export default useBooks;