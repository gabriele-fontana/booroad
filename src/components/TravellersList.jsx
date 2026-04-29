import { useParams } from "react-router-dom";
import { clienti } from "../data/clienti";

export default function TravellersList() {
    const { id } = useParams(); // recupero id dalla URL
    console.log(id);

    // filtro i clienti che hanno id_viaggio uguale all'id dell'URL
    const filteredClients = clienti.filter(
        (cliente) => cliente.id_viaggio === id
    );

    return (
        <>
            <h2>Lista Clienti</h2>

            {filteredClients.length === 0 && <p>Nessun cliente per questo viaggio.</p>}

            <ul>
                {filteredClients.map((cliente) => (
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
    );
}
