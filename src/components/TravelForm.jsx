/* import hooks */
import { useState } from "react";
import { useNavigate } from "react-router";

export default function TravelForm({ journeys, setJourneys }) {

  /* declare support variables */
  const [newtrip, setNewTrip] = useState({
    destination: "",
    start_date: "",
    end_date: ""
  });
  const [timeLeft, setTimeLeft] = useState(10);

  /* declare useNavigate hook */
  const navigate = useNavigate();


  /* handle form submit */
  function handleFormSubmit(e) {

    /* prevent default behavior in order to avoid page reload and data loss */
    e.preventDefault();

    /* get new trip id */
    const newId = journeys.length + 1;

    /* save new trip */
    const trip = { ...newtrip, id: newId };

    /* update journeys */
    setJourneys([...journeys, trip]);
    console.log(journeys);

    let intervalId;
    /* give user feedback */
    intervalId = setInterval(function () { setTimeLeft(prev => prev - 1) }, 1000)
    if (trip) {
      /* ⚠️ TODO: make feedback visible */
    }

    
    /* final operations */
    setTimeout(() => {

      /* clear interval */
      clearInterval(intervalId);

      /* reset newtrip and timeLeft */
      setNewTrip({ destination: "", start_date: "", end_date: "" });

      /* redirect to new trip details page */
      navigate(`/travel/${newId}`)

    }, 9999);
  }

  return (
    <>
      {/* new trip submission feedback */}
      <div className="alert alert-info" role="alert">
        Viaggio aggiunto con successo! Verrai reindirizzato alla pagina del viaggio in <span>{timeLeft}</span> secondi
      </div>
      {/* new trip accordion -> makes the form collapsible */}
      <div className="accordion shadow-sm border-0 mb-5" id="addNewTravel">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Vuoi aggiungere un nuovo viaggio?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">

              {/* add new trip form */}
              <form onSubmit={handleFormSubmit}>

                {/* destination field */}
                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">destination:</label>
                  <input type="text" className="form-control" id="destination" value={newtrip.destination} placeholder="Città, Nazione"
                    onChange={(e) => { setNewTrip({ ...newtrip, destination: e.target.value }) }} />
                </div>

                {/* start date field */}
                <div className="mb-3">
                  <label htmlFor="start_date" className="form-label">Data di inizio:</label>
                  <input type="date" className="form-control" id="start_date" name="start_date" value={newtrip.start_date}
                    onChange={(e) => { setNewTrip({ ...newtrip, start_date: e.target.value }) }} />
                </div>

                {/* end date field */}
                <div className="mb-3">
                  <label htmlFor="end_date" className="form-label">Data di fine:</label>
                  <input type="date" className="form-control" id="end_date" name="end_date" value={newtrip.end_date}
                    onChange={(e) => { setNewTrip({ ...newtrip, end_date: e.target.value }) }} />
                </div>

                {/* subbmission button */}
                <button className="btn btn-primary" type="submit" >Aggiungi viaggio</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}