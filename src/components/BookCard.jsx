import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
    <div className="card shadow-md p-4">
        <figure>
            <img src={book.cover} alt={book.title} className="w-full h-64 object-cover rounded-md" />
        </figure>
        <div className="mt-4">
            <h2 className="text-title">{book.title}</h2>
            <p className="text-sub">{book.author}</p>
            <Link to={`/book/${book.ID}`} className="btn mt-3 inline-block">查看詳細</Link>
        </div>
    </div>
);

export default BookCard;