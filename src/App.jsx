import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"; // Importa tu componente Home
import Login from "./Pages/Login"; // Importa tu componente Login
import Finanzas from "./Pages/Areas/Finanzas";
import RH from "./Pages/Areas/RH"; // Importa tu componente RH
import Marketing from "./Pages/Areas/Marketing"; // Importa tu componente Marketing 
import Sistemas from "./Pages/Areas/Sistemas"; // Importa tu componente Sistemas
import Ventas from "./Pages/Areas/Ventas";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Finanzas" element={<Finanzas />} />
        <Route path="/RH" element={<RH />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Sistemas" element={<Sistemas />} />
        <Route path="/Ventas" element={<Ventas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;