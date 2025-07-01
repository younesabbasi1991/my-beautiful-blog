import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Articles from "./pages/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactMe />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}

export default App;
