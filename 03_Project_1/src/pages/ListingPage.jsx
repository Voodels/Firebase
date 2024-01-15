import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/FireBase";
const ListingPage = () => {
  const [book, setName] = useState("");
  const [isBNnumber, setisBNnumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const firebase = useFirebase(); // Move the hook outside of the function

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(firebase);
    await firebase.handleCreateNewListing(book, isBNnumber, price, coverPic);
  };

  return (
    <>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Book name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Book name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={book}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control
            type="text"
            placeholder="ISBN number"
            onChange={(e) => {
              setisBNnumber(e.target.value);
            }}
            value={isBNnumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price$"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Photo</Form.Label>
          <Form.Control
            type="file"
            placeholder="Cover Photo"
            onChange={(e) => setCoverPic(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};
export default ListingPage;
