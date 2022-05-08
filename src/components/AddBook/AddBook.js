import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddBook = () => {
  const [user] = useAuthState(auth);

  const handleAddItem = (event) => {
    event.preventDefault();
    const book = {
      email: user.email,
      name: event.target.name.value,
      img: event.target.img.value,
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplier: event.target.supplier.value,
    };
    axios
      .post("https://powerful-harbor-56786.herokuapp.com/newbook", book)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Items added successfully.");
          event.target.reset();
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center text-primary mt-2 mb-2">Add New Book</h2>
      <form onSubmit={handleAddItem}>
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          id=""
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          id=""
          placeholder="Book name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="img"
          id=""
          placeholder="Image URL"
          required
        />
        <br />
        <textarea
          className="w-100 mb-2"
          type="text"
          name="description"
          placeholder="Description"
          required
        ></textarea>
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="price"
          id=""
          placeholder="Price"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          name="quantity"
          id=""
          placeholder="Quantity"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="supplier"
          id=""
          placeholder="Name of supplier"
          autoComplete="off"
          required
        />
        <br />
        <div className="d-flex justify-content-center">
          <input className="btn btn-success" type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
