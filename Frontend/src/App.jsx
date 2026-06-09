import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Home } from "../Pages/Home";
import { Favorites } from "../Pages/Favorites";

function App() {

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
    </BrowserRouter>
  )

}

export default App
