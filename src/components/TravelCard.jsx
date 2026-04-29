export default function TravelCard({ viaggio }) {
    return (
        <div className="p-3">
            <h2 className="h5">{viaggio.destinazione}</h2>
            <div>{viaggio.data_inizio} {viaggio.data_fine}</div>
        </div>
    )
}