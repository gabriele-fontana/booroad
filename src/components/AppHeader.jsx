import { Link } from "react-router"


export default function AppHeader() {

    return (
        <header className="sticky-top p-3 bg-white shadow-lg">
            <h1 className="h3"><Link className="text-decoration-none" to={'/'}>Booroad</Link></h1>
        </header>
    )

}