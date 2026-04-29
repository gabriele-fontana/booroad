import { useState } from "react";
import { useNavigate } from "react-router";
import { viaggi as initialViaggi } from "../data/trips";

export default function TravelForm() {
  const [viaggi, setViaggi] = useState(initialViaggi);
  const newId = viaggi.length + 1;
  const [newViaggio, setNewViaggio] = useState({
    id: newId,
    destinazione: "",
    data_inizio: "",
    data_fine: ""
  });

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    /* previeni comportamento di default (per non perdere dati) */
    e.preventDefault();
    /* aggiorna lista viaggi */
    setViaggi([...viaggi, newViaggio]);
    /* print in console the new array */
    console.log(viaggi);
    /* pulisci newViaggio */
    setNewViaggio({ id: "", destinazione: "", data_inizio: "", data_fine: "" });
    /* aprire la nuova pagina */
    setTimeout(() => navigate(`/travel/${newId}`), 3000);
  }

  return (

    <div className="accordion" id="addNewTravel">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Vuoi aggiungere un nuovo viaggio?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="destinazione" className="form-label">Destinazione:</label>
                <input type="text" className="form-control" id="destinazione" value={newViaggio.destinazione} placeholder="Città, Nazione"
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
          </div>
        </div>
      </div>
    </div>
  )
}