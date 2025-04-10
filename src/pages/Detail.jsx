import { useParams } from 'react-router-dom';
import books from '../data/books.json';

const Detail = () => {
  const { id } = useParams();
  const book = books.find(b => b.ID === parseInt(id));

  if (!book) return <p>書籍不存在</p>;

  return (
    <div className="p-6">
      <img src={book.cover} className="w-80 h-auto mb-4" />
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-gray-500">{book.author}</p>
      <p className="mt-4">{book.summary}</p>
      <p className="mt-4">售價：${book.price}</p>
      <p>庫存：{book.stock} 本</p>
    </div>
  );
};

export default Detail;