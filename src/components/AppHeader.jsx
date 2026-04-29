import { Link } from "react-router"


export default function AppHeader() {

    return (
        <header >
            <Link to={'/'}><h1>Booroad</h1></Link>
        </header>
    )

}