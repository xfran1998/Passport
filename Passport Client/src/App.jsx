import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
