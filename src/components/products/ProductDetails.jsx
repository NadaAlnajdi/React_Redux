import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Loading from '../Loading';

export default function ProductDetails() {
  const { data } = useLoaderData();
  const { id } = useParams();

  const [book, setBook] = useState(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setBook(data);
        setLoading(false);
      }, 300);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header text-white text-center" style={{ background: '#13ADB7' }}>
              <h2>Product Details</h2>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-4 fw-bold">Image:</div>
                <div className="col-8"><img src={book.src} alt={book.name} style={{ height: '100px', width: '100px' }} /></div>
              </div>
              <div className="row mb-3">
                <div className="col-4 fw-bold">ID:</div>
                <div className="col-8">{id}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4 fw-bold">Name:</div>
                <div className="col-8">{book.name}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4 fw-bold">Price:</div>
                <div className="col-8">{book.price}</div>
              </div>
              <div className="row mb-3">
                <div className="col-4 fw-bold">Free Shipping:</div>
                <div className="col-8">{book.FreeShipping ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
