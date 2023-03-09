import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Home from "./component/Home";
import Profile from "./component/profile";
import SignIn from "./component/signin";
import SignUp from "./component/signup";
import Navbar from "./component/Navbar";
import NotFound from "./component/NotFound";
import Chat from "./component/chat";
import "animate.css";

function App() {
  return (
    <>
      <Navbar />
      <Chat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/singIn" element={<SignIn />} />
        <Route path="/singUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
