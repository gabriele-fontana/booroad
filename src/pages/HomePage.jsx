import viaggi from "../data/viaggi"

export default function HomePage() {
    return (
        <div className="container">

            <div>
                {
                    viaggi.map(viaggio => (
                        <div key={viaggio.id} className="p-3">
                            <h2 className="h5">{viaggio.destinazione}</h2>
                            <div>{viaggio.data_inizio} {viaggio.data_fine}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}