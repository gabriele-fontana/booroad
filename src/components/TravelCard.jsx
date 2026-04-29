import { Link } from "react-router"

export default function TravelCard({ journey }) {
    return (
        <Link to={`/travel/${journey.id}`} className="text-decoration-none cursor-pointer">
            <div className="bg-white shadow rounded-1 p-5">
                <div className="row">
                    <div className="col-6">
                        <h2 className="h5 mb-0">{journey.destination}</h2>
                    </div>
                    <div className="col-6">
                        <div className="row row-cols-auto gx-2 align-items-center text-secondary">
                            <i className="bi bi-calendar-range"></i>
                            <span>{new Date(journey.start_date).toLocaleDateString("it-IT")}</span>
                            <i className="bi bi-arrow-right"></i>
                            <span>{new Date(journey.end_date).toLocaleDateString("it-IT")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}