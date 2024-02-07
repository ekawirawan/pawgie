import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchDog from "./pages/SearchDog";
import Dogs from "./pages/Dogs";
import DetailDog from "./pages/DetailDog";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:name" element={<SearchDog />} />
          <Route path="/dogs/:name/detail" element={<DetailDog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
