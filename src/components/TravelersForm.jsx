import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TravelersForm({ customers, setCustomers }) {

    const { id } = useParams();

    const [data, setData] = useState({
        id: "",
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        codice_fiscale: '',
        id_viaggio: parseInt(id)
    });

    function handleSubmit(e) {
        e.preventDefault();

        setCustomers([...customers, data]);
    }

    useEffect(() => {
        const newId = customers[customers.length - 1].id + 1;
        setData({ ...data, id: newId });
    }, [customers]);

    return (
        <>
            <div className="accordion my-4" id="addNewTravel">
                <div className="accordion-item">
                    <h2 className="accordion-header">

                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Vuoi aggiungere un nuovo viaggiatore?
                        </button>
                    </h2>

                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">

                            <form onSubmit={e => { handleSubmit(e) }}>

                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="first_name"
                                        name="first_name"
                                        autoComplete="given-name"
                                        value={data.first_name}
                                        onChange={(e) => setData({ ...data, first_name: e.target.value })}
                                        required={true}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="last_name" className="form-label">Cognome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="last_name"
                                        name="last_name"
                                        autoComplete="family-name"
                                        value={data.last_name}
                                        onChange={(e) => setData({ ...data, last_name: e.target.value })}
                                        required={true}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email" name="email"
                                        autoComplete="email"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        required={true}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Telefono</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone" name="phone"
                                        autoComplete="tel"
                                        value={data.phone}
                                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                                        required={true}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="codice_fiscale" className="form-label">Codice Fiscale</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="codice_fiscale"
                                        name="codice_fiscale"
                                        value={data.codice_fiscale}
                                        onChange={(e) => setData({ ...data, codice_fiscale: e.target.value })}
                                        required={true}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Registra</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}