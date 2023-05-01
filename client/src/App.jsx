import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
