import React from "react";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import Chat from "./component/chat/chat";
import NotFound from "./component/notFound/NotFound";
import Navbar from "./component/navbar/Navbar";
import SignIn from "./component/signin/signin";
import SignUp from "./component/signup/signup";
import Profile from "./component/profile/profile";
import Home from "./component/home/Home";
import Products from "./component/products/Products";
// import CopyRight from "./component/copy right/copyRight";

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
