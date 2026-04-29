import trips from "../data/trips";
import TravelCard from "../components/TravelCard"
import TravelForm from "../components/TravelForm"


export default function HomePage() {
    return (
        <div className="container py-5">
            <TravelForm />
            <div className="row row-col-1 row-cols-xl-2 g-3">
                {
                    trips.map(trip => (
                        <TravelCard key={trip.id} trip={trip} />
                    ))
                }
            </div>
        </div>
    )
}