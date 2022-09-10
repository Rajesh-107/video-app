import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/videos/:id" element={<Video></Video>}></Route>
        </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
