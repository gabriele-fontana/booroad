import { useState } from "react";
import { clienti } from "../data/clienti";
import { useParams } from "react-router-dom";

export default function TravelersForm() {

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

        clienti.push(data);
        console.log(clienti);
    }

    return (
        <>
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
        </>
    )
}