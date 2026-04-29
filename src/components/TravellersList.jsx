import { useState } from "react";

export default function TravellersList({ customers }) {

    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    const filteredCustomersSearch = customers.filter((cliente) => {
        const fullNameSearch = `${cliente.nome} ${cliente.cognome}`.toLowerCase();
        return fullNameSearch.includes(search.trim().toLowerCase());
    })

    const toggleCF = (id) => {
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <div className="card shadow-sm border-0">
            <div className="card-body">
                <h2 className="mb-4">Lista Clienti</h2>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Cerca partecipante..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {customers.length === 0 ? (
                    <div className="alert alert-info">Nessun cliente registrato per questo viaggio.</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Nome e Cognome</th>
                                    <th>Email</th>
                                    <th>Telefono</th>
                                    <th className="text-center">Azioni</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomersSearch.length > 0 ? (
                                    filteredCustomersSearch.map((cliente) => (
                                        <tr key={cliente.id}>
                                            <td>
                                                <div className="fw-bold">{cliente.nome} {cliente.cognome}</div>
                                                {/* Visualizzazione condizionale del Codice Fiscale */}
                                                {selectedId === cliente.id && (
                                                    <div className="badge bg-secondary mt-1">
                                                        CF: {cliente.codice_fiscale || 'Non disponibile'}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="text-muted small">{cliente.email}</td>
                                            <td className="text-muted small">{cliente.numero}</td>
                                            <td className="text-center">
                                                <button
                                                    className={`btn btn-sm ${selectedId === cliente.id ? 'btn-dark' : 'btn-outline-primary'}`}
                                                    onClick={() => toggleCF(cliente.id)}
                                                >
                                                    {selectedId === cliente.id ? 'Chiudi' : 'Dettagli'}
                                                </button>
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
                )}
            </div>
        </div>
    );
}
