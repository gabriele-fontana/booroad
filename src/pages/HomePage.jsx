import viaggi from "../data/viaggi"
import TravelCard from "../components/TravelCard"


export default function HomePage() {
    return (
        <div className="container">

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