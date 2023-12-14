import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import QuizComponent from "./Components/Quizpage";
import Quizpage from "./Components/Quizpage";
import Home from "./Components/Home";
import Try from "./Components/Try";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quizpage />} />
        <Route path="try" element={<Try />} />
      </Routes>
    </main>
  );
}

export default App;
