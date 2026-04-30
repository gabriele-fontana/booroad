import { Link } from "react-router";

export default function AppHeader({ children }) {
    return (
        <header className="sticky-top py-3 px-3 px-md-5 bg-white shadow-lg d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">
                <Link className="text-decoration-none" to={'/'}>BooRoad <i className="bi bi-backpack2"></i></Link>
            </h1>
            {children}
        </header>
    );
}