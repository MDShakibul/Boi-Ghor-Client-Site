import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyBook from "./MyBook/MyBook";

const MyBooks = () => {
  const [user] = useAuthState(auth);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://powerful-harbor-56786.herokuapp.com/newbook?email=${email}`;
      const { data } = await axios.get(url);
      setBooks(data);
    };
    getItems();
  }, [user]);
  return (
    <div>
      <h1 className="text-center mt-3 text-primary mb-3">Book Store</h1>

      <div className="container">
        <div className="row g-3">
          {books.slice(0, 6).map((book) => (
            <MyBook key={book._id} book={book}></MyBook>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
