import reactLogo from "./assets/react.svg";
import Editor from "./components/Editor";
import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { FormOutlined } from "@ant-design/icons";

function App() {
  const [arr, setArr] = useState([FormOutlined] as any[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NavBar arr={arr} setArr={setArr} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
