import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlagDetails from "./components/FlagDetails/FlagDetails";

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Details" element={<FlagDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
