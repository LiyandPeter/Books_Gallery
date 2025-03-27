//import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import BookDetailPage from './pages/BookDetailPage';
import './pages/GalleryPage.css';
import './pages/BookDetailPage.css';

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
