import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import { Login } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
