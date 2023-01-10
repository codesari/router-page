import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/subscribe/Subscribe";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import Html from "./pages/Html";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import data from "./data";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="html" element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<Javascript />} />

        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
