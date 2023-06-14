import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Vans from "./pages/Vans";
import Van from "./pages/Van";

import './server'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />}></Route>
        <Route path="/vans/:id" element={<Van />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
