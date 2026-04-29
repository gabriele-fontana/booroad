import TravellersList from "../components/TravellersList";
import TravelersForm from "../components/TravelersForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailPage({ customers, setCustomers }) {

    const { id } = useParams();

    const viaggioId = parseInt(id);

    const travelCustomers = customers.filter(
        (cliente) => cliente.id_viaggio === viaggioId
    );

    return (
        <div className="container py-5">
            <h1>Details</h1>
            <TravellersList customers={travelCustomers} />
            <TravelersForm customers={customers} setCustomers={setCustomers} />
        </div>
    )
}