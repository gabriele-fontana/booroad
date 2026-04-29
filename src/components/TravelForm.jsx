import { useState } from "react";
import { viaggi as initialViaggi } from "../data/viaggi";

export default function TravelForm() {
  const [viaggi, setViaggi] = useState(initialViaggi);
  const [newViaggio, setNewViaggio] = useState({
    destinazione: "L'isola che non c'è",
    data_inizio: "2026-04-29",
    data_fine: "2026-05-02"
  });

  function handleFormSubmit(e) {
    /* previeni comportamento di default (per non perdere dati) */
    e.preventDefault();
    /* aggiorna lista viaggi */
    setViaggi([...viaggi, newViaggio]);
    /* pulisci newViaggio */
    setNewViaggio({ destinazione: "", data_inizio: "", data_fine: "" });
  }

  return (

    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="destinazione" className="form-label">Destinazione:</label>
        <input type="text" className="form-control" id="destinazione" value={newViaggio.destinazione}
          onChange={(e) => { setNewViaggio({ ...newViaggio, destinazione: e.target.value }) }} />
      </div>
      <div className="mb-3">
        <label htmlFor="data_inizio" className="form-label">Data di inizio:</label>
        <input type="date" className="form-control" id="data_inizio" name="data_inizio" value={newViaggio.data_inizio}
          onChange={(e) => { setNewViaggio({ ...newViaggio, data_inizio: e.target.value }) }} />
      </div>
      <div className="mb-3">
        <label htmlFor="data_fine" className="form-label">Data di fine:</label>
        <input type="date" className="form-control" id="data_fine" name="data_fine" value={newViaggio.data_fine}
          onChange={(e) => { setNewViaggio({ ...newViaggio, data_fine: e.target.value }) }} />
      </div>
      <button type="submit" >Aggiungi viaggio</button>
    </form>
  )
}