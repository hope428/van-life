import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";
import Layout from "./components/Layout";
import Dashboard from "./pages/host/Dashboard";

import "./server";
import HostLayout from "./pages/host/HostLayout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="vans" element={<Vans />}></Route>
          <Route path="vans/:id" element={<Van />}></Route>
          <Route path="host" element={<HostLayout />}>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
