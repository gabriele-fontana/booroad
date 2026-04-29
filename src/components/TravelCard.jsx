import { Link } from "react-router"

export default function TravelCard({ viaggio }) {
    return (
        <Link to={`/travel/${viaggio.id}`} className="text-decoration-none cursor-pointer">
            <div className="bg-white shadow rounded-1 p-3">
                <div className="row">
                    <div className="col-6"><h2 className="h5">{viaggio.destinazione}</h2></div>
                    <div className="col-6">
                        <div className="row row-cols-auto gx-2 align-items-center">
                            <i className="bi bi-calendar-range"></i>
                            <span>{new Date(viaggio.data_inizio).toLocaleDateString("it-IT")}</span>
                            <i className="bi bi-arrow-right"></i>
                            <span>{new Date(viaggio.data_fine).toLocaleDateString("it-IT")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}