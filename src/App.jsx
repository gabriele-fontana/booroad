import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MainLayout from "./layouts/MainLayout";
import 'bootstrap/dist/css/bootstrap.min.css'
import { clients } from "./data/clients";
import { useState } from "react";
import trips from "./data/trips";

function App() {
  
  const [customers, setCustomers] = useState(clients);
  const [journeys, setJourneys] = useState(trips);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/travel/:id" element={<DetailPage customers={customers} setCustomers={setCustomers} journeys={journeys} setJourneys={setJourneys} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
