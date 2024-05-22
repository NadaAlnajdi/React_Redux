import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBookThunk, editBookThunk, fetchBookById } from '../../store/booksSlice';
import { Form, Button } from 'react-bootstrap';
import Loading from "../Loading";
import Error from "../Error";  // Import the Error component

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { book, loading, error } = useSelector((state) => state.books);

  const [formData, setFormData] = useState({
    name: '',
    src: '',
    pages: '',
    price: '',
    FreeShipping: false
  });

  useEffect(() => {
    if (id !== '0') {
      dispatch(fetchBookById(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const [formErrors, setFormErrors] = useState({
    name: '',
    src: '',
    pages: '',
    price: '',
    FreeShipping: ''
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const errors = {};
    if (formData.name.length < 3) {
      errors.name = 'Name should be at least 3 characters long';
    }
    if (parseFloat(formData.price) <= 10 || isNaN(parseFloat(formData.price))) {
      errors.price = 'Price should be greater than 10';
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        if (id === '0') {
          await dispatch(addNewBookThunk(formData));
        } else {
          await dispatch(editBookThunk({ book: formData, bookId: id }));
        }
        navigate('/books');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="container">
      <Form onSubmit={submitHandler} className="w-75 m-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicNameBook">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book Name"
            value={formData.name}
            onChange={changeHandler}
            name="name"
          />
          {formErrors.name && <div className="text-danger">{formErrors.name}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image"
            value={formData.src}
            onChange={changeHandler}
            name="src"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPages">
          <Form.Label>Pages</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter pages"
            value={formData.pages}
            onChange={changeHandler}
            name="pages"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            value={formData.price}
            onChange={changeHandler}
            name="price"
          />
          {formErrors.price && <div className="text-danger">{formErrors.price}</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFreeShipping">
          <Form.Check
            type="checkbox"
            label="Free Shipping"
            name="FreeShipping"
            checked={formData.FreeShipping}
            onChange={(e) => setFormData({ ...formData, FreeShipping: e.target.checked })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {id === '0' ? 'Add Book' : 'Update Book'}
        </Button>
      </Form>
    </div>
  );
}
