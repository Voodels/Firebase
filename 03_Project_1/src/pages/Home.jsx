import { useEffect, useState } from "react";
import { useFirebase } from "../context/FireBase";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const firebase = useFirebase();

  useEffect(() => {
    // Fetch books and handle loading state
    firebase
      .ListAllBooks()
      .then((books) => {
        setBooks(books.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, [firebase]);

  return (
    <>
      <div className="container mt-5">
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No books available</p>
        ) : (
          books.map((book) => (
            <BookCard
              key={book.id}
              title={book.data().title}
              description={book.data().description}
              imageUrl={book.data().imageUrl}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
