import { useParams, Link } from 'react-router-dom';
import books from '../data/books.json';

const BookDetail = () => {
  const { id } = useParams(); // 從網址取得書本 ID
  const book = books.find((b) => b.ID === parseInt(id)); // 尋找對應書本

  if (!book) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">找不到這本書 📚</h2>
        <Link to="/" className="btn btn-primary mt-4">回到首頁</Link>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
        <img
            src={book.cover}
            alt={book.title}
            className="w-full md:w-80 h-auto shadow-md rounded-md"
        />
        <div>
            <h1 className="text-title mb-2">{book.title}</h1>
            <h2 className="text-sub mb-4">作者：{book.author}</h2>
            <p className="mb-4">{book.summary}</p>
            <div className="mt-6 space-y-2">
                <p>💵 <strong>售價：</strong> ${book.price}</p>
                <p>📦 <strong>庫存：</strong> {book.stock} 本</p>
            </div>
            <Link to="/" className="btn-outline mt-6 inline-block">回到書籍列表</Link>
        </div>
    </div>
  );
};

export default BookDetail;