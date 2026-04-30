import { Link } from "react-router";

export default function AppHeader({ children }) {
    return (
        <header className="sticky-top p-3 bg-white shadow-lg d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">
                <Link className="text-decoration-none" to={'/'}>Booroad</Link>
            </h1>
            {children}
        </header>
    );
}