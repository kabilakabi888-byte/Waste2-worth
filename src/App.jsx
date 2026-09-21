import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductDetails from "./pages/ProductDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">

        <Link to="/" className="logo">
          ♻️ Waste2Worth
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/explore">Explore</Link>
          <Link to="/list-waste">List Waste</Link>
          <Link to="/map">Map</Link>
          <Link to="/holder-login">Holder Login</Link>
        </div>

      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/explore" element={<Explore />} />

        <Route
          path="/explore/:category"
          element={<Explore />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/list-waste"
          element={
            <div className="temporary-page">
              <h1>List Your Waste</h1>

              <p>
                Holder login and waste listing will be connected here next.
              </p>

              <Link to="/holder-login">
                Go to Holder Login →
              </Link>
            </div>
          }
        />

        <Route
          path="/map"
          element={
            <div className="temporary-page">
              <h1>Find Materials Near You</h1>

              <p>
                Interactive waste map coming soon.
              </p>
            </div>
          }
        />

        <Route
          path="/holder-login"
          element={
            <div className="temporary-page">
              <h1>Holder Login</h1>

              <p>
                Your previous Holder Login design will be connected here next.
              </p>
            </div>
          }
        />

      </Routes>

      <footer className="footer">

        <h2>
          ♻️ Waste2Worth
        </h2>

        <p>
          Turning waste into resources, one community at a time.
        </p>

        <small>
          © 2026 Waste2Worth Community
        </small>

      </footer>

    </BrowserRouter>
  );
}

export default App;