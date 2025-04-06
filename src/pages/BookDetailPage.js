import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../books.json';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams(); // 取得 URL 中的書籍ID
  const [book, setBook] = useState(null);

  useEffect(() => {
    // 根據ID查找對應的書籍
    const foundBook = booksData.find((b) => b.ID === parseInt(id));
    setBook(foundBook);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-detail-container p-8">
      <div className="book-detail-content max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <img src={book.cover} alt={book.title} className="w-full h-96 object-cover rounded-lg mb-8" />
        <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
        <p className="text-xl text-gray-700 mb-2">by {book.author}</p>
        <p className="text-lg text-gray-800 mb-4">{book.summary}</p>
        <p className="text-lg text-gray-600">Price: ${book.price}</p>
        <p className="text-lg text-gray-600">In Stock: {book.stock}</p>
      </div>
    </div>
  );
};

export default BookDetailPage;