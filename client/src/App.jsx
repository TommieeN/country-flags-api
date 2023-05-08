import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FlagDetails from "./components/FlagDetails/FlagDetails";

function App() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flags" element={<FlagDetails />} />
        <Route path="/flags/:flagId" element={<FlagDetails />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
