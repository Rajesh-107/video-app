import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/Footer";
import {
  Routes,
  Route,
} from "react-router-dom";

import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/videos/:videoId" element={<Video></Video>}></Route>
          <Route path="/videos/add" element={<Add></Add>}></Route>
          <Route path="/videos/edit/:videoId" element={<Edit></Edit>}></Route>
        </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
