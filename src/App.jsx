import Achievement from "./Pages/Achievement/achievement";
import Gallery from "./Pages/Gallery/gallery";
import Portfolio from "./Pages/Portfolio/portfolio";
import Biodata from "./Pages/Biodata/biodata";
import Home from "./Pages/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biodata" element={<Biodata />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
