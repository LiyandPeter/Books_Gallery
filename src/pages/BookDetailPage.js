import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import booksData from './books.json';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // books.json 檔案
    const selectedBook = booksData.find(book => book.id === id);
    setBook(selectedBook);
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-8">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <figure><img src={book.cover} alt={book.title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p>{book.author}</p>
          <p>Price: ${book.price}</p>
          <p>Stock: {book.stock} available</p>
          <p>{book.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;