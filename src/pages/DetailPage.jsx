import TravellersList from "../components/TravellersList";
import TravelersForm from "../components/TravelersForm";

export default function DetailPage() {
    return (
        <div className="container py-5">
            <h1>Details</h1>
            <TravellersList />
            <TravelersForm />
        </div>
    )
}