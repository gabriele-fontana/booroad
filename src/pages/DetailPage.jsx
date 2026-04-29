import TravellersList from "../components/TravellersList";
import TravelersForm from "../components/TravelersForm";
import { useParams } from "react-router-dom";

export default function DetailPage({ customers, setCustomers }) {

    const { id } = useParams();

    return (
        <div className="container py-5">
            <h1>Details</h1>
            <TravellersList />
            <TravelersForm customers={customers} setCustomers={setCustomers} />
        </div>
    )
}