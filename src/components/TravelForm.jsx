import { useState } from "react";
import { useNavigate } from "react-router";
import initialTrips from "../data/trips";

export default function TravelForm() {
  const [trips, setTrips] = useState(initialTrips);
  const newId = trips.length + 1;
  const [newtrips, setNewTrips] = useState({
    id: newId,
    destination: "",
    start_date: "",
    end_date: ""
  });

  const navigate = useNavigate();

  function handleFormSubmit(e) {
    /* previeni comportamento di default (per non perdere dati) */
    e.preventDefault();
    /* aggiorna lista trips */
    setTrips([...trips, newtrips]);
    /* print in console the new array */
    console.log(trips);
    /* pulisci newtrips */
    setNewTrips({ id: "", destination: "", start_date: "", end_date: "" });
    /* aprire la nuova pagina */
    setTimeout(() => navigate(`/travel/${newId}`), 3000);
  }

  return (

    <div className="accordion" id="addNewTravel">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Vuoi aggiungere un nuovo trips?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="destination" className="form-label">destination:</label>
                <input type="text" className="form-control" id="destination" value={newtrips.destination} placeholder="Città, Nazione"
                  onChange={(e) => { setNewTrips({ ...newtrips, destination: e.target.value }) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="start_date" className="form-label">Data di inizio:</label>
                <input type="date" className="form-control" id="start_date" name="start_date" value={newtrips.start_date}
                  onChange={(e) => { setNewTrips({ ...newtrips, start_date: e.target.value }) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="end_date" className="form-label">Data di fine:</label>
                <input type="date" className="form-control" id="end_date" name="end_date" value={newtrips.end_date}
                  onChange={(e) => { setNewTrips({ ...newtrips, end_date: e.target.value }) }} />
              </div>
              <button type="submit" >Aggiungi tripso</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}