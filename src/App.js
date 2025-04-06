import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';  // 引入 GalleryPage
import BookDetailPage from './pages/BookDetailPage';  // 引入 BookDetailPage
import './pages/GalleryPage.css';  // GalleryPage 樣式
import './pages/BookDetailPage.css';  // BookDetailPage 樣式

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Books Gallery</h1>
        </header>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
