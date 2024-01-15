import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar";

//pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import ListingPage from "./pages/ListingPage";
import Home from "./pages/Home";

//
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/book/list" element={<ListingPage />}></Route>

          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
