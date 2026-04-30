import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import MainLayout from "./layouts/MainLayout";
import DetailLayout from "./layouts/DetailLayout"; // Importa il nuovo layout
import AppHeader from "./components/AppHeader"; // Importa l'header
import 'bootstrap/dist/css/bootstrap.min.css';
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

          {/* Qua rimane normale, Main layout non contiene più AppHeader, quindi dove mi serve glielo passso */}
          <Route index element={
            <>
              <AppHeader />
              <HomePage journeys={journeys} setJourneys={setJourneys} />
            </>
          } />

          {/* Qua modifico la rotta dettagli, gli passo il nuovo layout con dentro app Header modificato */}
          <Route element={<DetailLayout />}>
            <Route
              path="/travel/:id"
              element={<DetailPage customers={customers} journeys={journeys} setCustomers={setCustomers} />}
            />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
