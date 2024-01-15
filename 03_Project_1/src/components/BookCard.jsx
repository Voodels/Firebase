import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useFirebase } from "../context/FireBase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const BookCard = ({ title, description, imageUrl }) => {
  const firebase = useFirebase();
  const [url, setUrl] = useState("");
  useEffect(() => {
    // Create a non-root reference using child
    const storageRef = firebase.storage.ref().child(imageUrl);

    // Use getDownloadURL on the created reference
    storageRef
      .getDownloadURL()
      .then((url) => {
        setUrl(url);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [firebase.storage, imageUrl]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={url} alt={`Image for ${title}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
