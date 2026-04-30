import { Link } from "react-router"

export default function TravelCard({ journey }) {
    return (
        <Link to={`/travel/${journey.id}`} className="text-decoration-none cursor-pointer">
            <div className="bg-white shadow rounded-1 ps-3 ps-md-5 pe-5 py-3 py-md-5 position-relative">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="h5 mb-0"><i className="bi bi-geo-alt-fill"></i> {journey.destination}</h2>
                    </div>
                    <div className="col-md-6">
                        <div className="row row-cols-auto gx-2 align-items-center text-secondary">
                            <i className="bi bi-calendar-range"></i>
                            <span>{new Date(journey.start_date).toLocaleDateString("it-IT")}</span>
                            <i className="bi bi-arrow-right"></i>
                            <span>{new Date(journey.end_date).toLocaleDateString("it-IT")}</span>
                        </div>
                    </div>
                </div>
                <i className="position-absolute fs-3 bi bi-chevron-right top-50 end-0 translate-middle-y me-3"></i>
            </div>
        </Link>
    )
}