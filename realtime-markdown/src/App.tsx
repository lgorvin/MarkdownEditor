import reactLogo from "./assets/react.svg";
import Editor from "./components/Editor";
import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { FormOutlined } from "@ant-design/icons";

function App() {
  const [arr, setArr] = useState([FormOutlined] as any[]);
  const [darkMode, setDarkMode] = useState(false);
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <NavBar
              arr={arr}
              setArr={setArr}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
