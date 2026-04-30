import { Link } from "react-router"

export default function TravelCard({ journey }) {
    return (
        <Link to={`/travel/${journey.id}`} className="text-decoration-none cursor-pointer">
            <div className="bg-white shadow rounded-1 py-5 ps-5 pe-3">
                <div className="row align-items-center">
                    <div className="col-4">
                        <h2 className="h5 mb-0">{journey.destination}</h2>
                    </div>
                    <div className="col">
                        <div className="row row-cols-auto gx-2 align-items-center text-secondary">
                            <i className="bi bi-calendar-range"></i>
                            <span>{new Date(journey.start_date).toLocaleDateString("it-IT")}</span>
                            <i className="bi bi-arrow-right"></i>
                            <span>{new Date(journey.end_date).toLocaleDateString("it-IT")}</span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <i className="fs-3 bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>
        </Link>
    )
}