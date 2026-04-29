import TravellersList from "../components/TravellersList";
import TravelersForm from "../components/TravelersForm";
import { clienti } from "../data/clienti";
import { viaggi } from "../data/viaggi";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function DetailPage() {

    const { id } = useParams();
    const [customers, setCustomers] = useState(clienti.filter(cliente => cliente.id_viaggio === parseInt(id)));
    const viaggio = viaggi.find(viaggio => viaggio.id === parseInt(id))

    return (
        <div className="container py-5">
            <h1>{viaggio.destinazione}</h1>
            <TravellersList customers={customers} />
            <TravelersForm />
        </div>
    )
}