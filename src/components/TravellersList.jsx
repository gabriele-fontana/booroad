import { useState } from "react";

export default function TravellersList({ customers }) {

    const [search, setSearch] = useState("");

    const filteredCustomersSearch = customers.filter((cliente) => {
        const fullNameSearch = `${cliente.nome} ${cliente.cognome}`.toLowerCase();
        return fullNameSearch.includes(search.trim().toLowerCase());
    })

    return (
        <>
            <h2>Lista Clienti</h2>

            <div className="mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Cerca partecipante"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {customers.length === 0 ? (
                <p>Nessun cliente registrato per questo viaggio.</p>
            ) : (
                <>
                    {filteredCustomersSearch.length === 0 && (
                        <p>Nessun partecipante corrisponde alla ricerca</p>
                    )}


                    <ul>
                        {filteredCustomersSearch.map((cliente) => (
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
