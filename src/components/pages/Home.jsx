// src/components/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Slider } from '../Slider';
import Products from '../products/Products';
import Loading from '../Loading';
import Error from '../Error';
import { fetchBooks } from '../../store/booksSlice';

export function Home() {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <>
      <Slider />
      <Products Books={books} />
    </>
  );
}
