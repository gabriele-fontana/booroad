import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MainLayout from "./layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css'
import { clienti } from "./data/clienti";
import { useState } from "react";

function App() {

  const [customers, setCustomers] = useState(clienti);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/travel/:id" element={<DetailPage customers={customers} setCustomers={setCustomers} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
