import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SearcAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
  return (
    <BrowserRouter>
      <SearcAppBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Tour />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
