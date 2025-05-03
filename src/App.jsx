import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; // Importa tu componente Home
import Login from "./Pages/Login"; // Importa tu componente Login

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;