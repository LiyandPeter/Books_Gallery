import books from '../data/books.json';
import BookCard from '../components/BookCard';

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map(book => (
        <BookCard key={book.ID} book={book} />
      ))}
    </div>
  );
};

export default Gallery;