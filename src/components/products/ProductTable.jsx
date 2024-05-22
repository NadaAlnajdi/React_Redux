import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBookThunk } from '../../store/booksSlice';
import Loading from "../Loading";
import Error from "../Error";

export default function ProductTable() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const deleteHandler = async (bookId) => {
    await dispatch(deleteBookThunk(bookId));
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="mt-4 bg-light p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Image</th>
            <th>FreeShipping</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.name}</td>
              <td>{book.pages}</td>
              <td>{book.price}</td>
              <td>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={book.src}
                  alt={book.name}
                />
              </td>
              <td>{book.FreeShipping ? "Yes" : "No"}</td>
              <td>
                <Link to={`/books/${book.id}`}>
                  <i className="fs-2 mx-1 text-warning bi bi-eye-fill"></i>
                </Link>
                <a href="#" onClick={() => deleteHandler(book.id)}>
                  <i className="fs-2 mx-1 text-danger bi bi-trash3-fill"></i>
                </a>
                <Link to={`/books/edit/${book.id}`}>
                  <i className="fs-2 mx-1 text-info bi bi-pencil-square"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
