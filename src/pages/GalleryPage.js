import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../books.json';
import './GalleryPage.css';

// 書籍卡片組件
const BookCard = ({ book }) => {
  return (
    <div className="book-card shadow-lg rounded-lg p-4">
      <figure>
        <img src={book.cover} alt={book.title} className="rounded-lg" loading="lazy" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/book/${book.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setBooks(booksData);
      setLoading(false); // 加載完成
    } catch (error) {
      setError('Failed to load books.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="gallery-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book) => (
        <BookCard key={book.ID} book={book} />
      ))}
    </div>
  );
};

export default GalleryPage;