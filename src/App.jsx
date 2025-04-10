import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import BookDetail from './components/BookDetail';

function App() {
  return (
    <Router>
      <nav className="bg-[#5D3A00] text-white p-4 mb-6 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">📚 書籍導覽</h1>
          <div className="space-x-4">
            <a href="/" className="hover:underline">首頁</a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
