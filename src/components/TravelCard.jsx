import { Link } from "react-router"

export default function TravelCard({ viaggio }) {
    return (
        <Link to={`/travel/${viaggio.id}`} className="p-3">
            <h2 className="h5">{viaggio.destinazione}</h2>
            <div>{viaggio.data_inizio} {viaggio.data_fine}</div>
        </Link>
    )
}