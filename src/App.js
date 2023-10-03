import { Route, BrowserRouter, Routes, Link } from "react-router-dom"; // Import Link
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/page/:page" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
