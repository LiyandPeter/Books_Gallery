import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import booksData from './books.json';
import './GalleryPage.css';

const GalleryPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // books.json 檔案
    setBooks(booksData);
  }, []);

  return (
    <div className="gallery-container">
      {books.map(book => (
        <div key={book.id} className="book-card">
          <figure><img src={book.cover} alt={book.title} /></figure>
          <div className="card-body">
            <h2 className="card-title">{book.title}</h2>
            <p>{book.author}</p>
            <div className="card-actions justify-end">
              <Link to={`/book/${book.id}`} className="view-details-btn">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;