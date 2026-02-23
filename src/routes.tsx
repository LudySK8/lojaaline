import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Login from "./pages/Login";
import ProductSection from "./pages/Cadastro";
import Cadastro from "./pages/Cadastro";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductSection />} /> 
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro  />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;