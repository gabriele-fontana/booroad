//import trips from "../data/trips";
import TravelCard from "../components/TravelCard"
import TravelForm from "../components/TravelForm"


export default function HomePage( {journeys, setJourneys} ) {
    return (
        <div className="container py-5">
            <TravelForm journeys={journeys} setJourneys={setJourneys} />
            <div className="row row-col-1 row-cols-xl-2 g-3">
                {
                    journeys.map(journey => (
                        <TravelCard key={journey.id} journey={journey} />
                    ))
                }
            </div>
        </div>
    )
}