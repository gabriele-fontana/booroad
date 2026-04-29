import { useState } from "react";
import { useParams } from "react-router-dom";
import { clienti } from "../data/clienti";

export default function TravellersList() {
    const { id } = useParams(); // recupero id dalla URL
    console.log(id);

    const [search, setSearch] = useState("");

    console.log("Valore attuale di search:", search);

    // filtro i clienti che hanno id_viaggio uguale all'id dell'URL
    const filteredClients = clienti.filter(
        (cliente) => cliente.id_viaggio === parseInt(id)
    );

    // filtro di ricerca clienti
    const filteredClientsSearch = filteredClients.filter((cliente) => {
        const fullNameSearch = `${cliente.nome} ${cliente.cognome}`.toLowerCase();
        return fullNameSearch.includes(search.trim().toLowerCase());
    })

    return (
        <>
            <h2>Lista Clienti</h2>

            {/* Search clienti */}
            <div className="mb-2">
                <input
                    type="text"
                    placeholder="Cerca partecipante"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* {filteredClients.length === 0 && filteredClientsSearch.length === 0 && <p>Nessun cliente per questo viaggio.</p>} */}

            {/* creato un ternario che se non trova clienti da un messaggio altrimenti ne da un altro in base alla ricerca */}

            {filteredClients.length === 0 ? (
                <p>Nessun cliente registrato per questo viaggio.</p>
            ) : (
                <>
                    {filteredClientsSearch.length === 0 && (
                        <p>Nessun partecipante corrisponde alla ricerca</p>
                    )}


                    <ul>
                        {filteredClientsSearch.map((cliente) => (
                            <li
                                key={cliente.id}
                            >
                                <strong>
                                    {cliente.nome} {cliente.cognome}
                                </strong>

                                <div>Email: {cliente.email}</div>
                                <div>Telefono: {cliente.numero}</div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}
