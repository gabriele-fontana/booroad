import { useState } from "react";
import { useNavigate } from "react-router";
//import initialTrips from "../data/trips";

export default function TravelForm({ journeys, setJourneys }) {
  
  const [newtrip, setNewTrip] = useState({
    destination: "",
    start_date: "",
    end_date: ""
  });

  const navigate = useNavigate();
  
  function handleFormSubmit(e) {

    /* previeni comportamento di default (per non perdere dati) */
    e.preventDefault();

    /* get new trip id */
    const newId = journeys.length + 1;

    /*  */
    const trip = { ...newtrip, id: newId };

    /* aggiorna lista trips */
    setJourneys([...journeys, trip]);
    console.log(journeys);

    /* pulisci newtrip */
    setNewTrip({ destination: "", start_date: "", end_date: "" });

    /* aprire la nuova pagina */
    setTimeout(() => navigate(`/travel/${newId}`), 5000);
  }

  return (

    <div className="accordion shadow-sm border-0 mb-5" id="addNewTravel">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Vuoi aggiungere un nuovo viaggio?
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label htmlFor="destination" className="form-label">destination:</label>
                <input type="text" className="form-control" id="destination" value={newtrip.destination} placeholder="Città, Nazione"
                  onChange={(e) => { setNewTrip({ ...newtrip, destination: e.target.value }) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="start_date" className="form-label">Data di inizio:</label>
                <input type="date" className="form-control" id="start_date" name="start_date" value={newtrip.start_date}
                  onChange={(e) => { setNewTrip({ ...newtrip, start_date: e.target.value }) }} />
              </div>
              <div className="mb-3">
                <label htmlFor="end_date" className="form-label">Data di fine:</label>
                <input type="date" className="form-control" id="end_date" name="end_date" value={newtrip.end_date}
                  onChange={(e) => { setNewTrip({ ...newtrip, end_date: e.target.value }) }} />
              </div>
              <button className="btn btn-primary" type="submit" >Aggiungi viaggio</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}