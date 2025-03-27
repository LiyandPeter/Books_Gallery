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
    <div className="book-detail-container">
      <div className="book-detail-card">
        <figure><img src={book.cover} alt={book.title} className="book-detail-img" /></figure>
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
          <p className="book-details">Price: ${book.price}</p>
          <p className="book-details">Stock: {book.stock} available</p>
          <p className="book-details">{book.summary}</p>
        </div>
      </div>
      <Link to="/" className="return-btn">Back to Gallery</Link>
    </div>
  );
};

export default BookDetailPage;