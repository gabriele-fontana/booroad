import { useState } from "react";

export default function TravellersList({ customers }) {

    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const filteredCustomersSearch = customers.filter((cliente) => {
        const fullNameSearch = `${cliente.first_name} ${cliente.last_name}`.toLowerCase();
        return fullNameSearch.includes(search.trim().toLowerCase());
    })

    const toggleCF = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <div className="card shadow-sm border-0">
            <div className="card-body">
                <h2 className="mb-4">Lista Clienti <span className="h4 ms-3 mb-0 text-secondary">{customers.length} <i className="bi bi-people-fill"></i></span></h2>



                {customers.length === 0 ? (
                    <div className="alert alert-info">Nessun cliente registrato per questo viaggio.</div>
                ) : (
                    <div>
                        {/* Search Bar */}
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cerca partecipante..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="table-responsive">
                                <table className="table table-striped table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th className="d-flex justify-content-between">
                                            <div>Nome e Cognome</div>
                                            <div>Dettagli</div>
                                        </th>
                                    </tr>
                                </thead>
                                    <tbody id="accordionTravellersList">
                                    {filteredCustomersSearch.length > 0 ? (
                                        filteredCustomersSearch.map((cliente) => (
                                            <tr key={cliente.id}>
                                                <td>
                                                    <div className="accordion" id={`accordionTraveler-${cliente.id}`}>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header">
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${cliente.id}`} aria-expanded="false" aria-controls={`collapse${cliente.id}`}>
                                                                    <div className="fw-bold"><i className="bi bi-person-fill"></i> {cliente.first_name} {cliente.last_name}</div>
                                                                </button>
                                                            </h2>
                                                            <div id={`collapse${cliente.id}`} className="accordion-collapse collapse " data-bs-parent="#accordionTravellersList">
                                                                <div className="accordion-body">
                                                                    <div className="text-muted small">{cliente.email}</div>
                                                                    <div className="text-muted small">{cliente.phone}</div>
                                                                    <div className="text-muted small">
                                                                        CF: {cliente.codice_fiscale || 'Non disponibile'}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center text-muted py-4">
                                                Nessun partecipante corrisponde alla ricerca
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
