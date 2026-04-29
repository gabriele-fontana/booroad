import viaggi from "../data/viaggi"
import TravelCard from "../components/TravelCard"
import TravelForm from "../components/TravelForm"


export default function HomePage() {
    return (
        <div className="container py-5">
            <TravelForm />
            <div>
                {
                    viaggi.map(viaggio => (
                        <TravelCard key={viaggio.id} viaggio={viaggio} />
                    ))
                }
            </div>
        </div>
    )
}