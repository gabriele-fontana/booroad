import TravellersList from "../components/TravellersList";
import TravelersForm from "../components/TravelersForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetailPage({ customers, setCustomers, journeys, setJourneys }) {

    const { id } = useParams();

    const viaggioId = parseInt(id);

    const travelCustomers = customers.filter(
        (cliente) => cliente.id_viaggio === viaggioId
    );

    const currentJourney = journeys?.find(journey => journey.id === viaggioId)

    return (
        <div className="container py-5">
            <div className="row row-cols-auto gx-5">
                <h1 className="mb-0">{currentJourney?.destination}</h1>
                <div className="row row-cols-auto gx-2 align-items-center text-secondary">
                    <i className="bi bi-calendar-range"></i>
                    <span>{new Date(currentJourney.start_date).toLocaleDateString("it-IT")}</span>
                    <i className="bi bi-arrow-right"></i>
                    <span>{new Date(currentJourney.end_date).toLocaleDateString("it-IT")}</span>
                </div>
            </div>
            <TravelersForm customers={customers} setCustomers={setCustomers} />
            <TravellersList customers={travelCustomers} />
        </div>
    )
}