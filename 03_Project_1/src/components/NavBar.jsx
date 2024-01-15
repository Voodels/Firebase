import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary black ">
      <Container>
        <Navbar.Brand
          style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "bold",
          }}
          href="/"
        >
          BookListing
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/register"
            >
              Register
            </Nav.Link>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              href="/login"
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                to="/book/list"
              >
                Add Listing
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
