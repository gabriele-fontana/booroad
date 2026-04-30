import { Outlet, Link } from "react-router";
import AppHeader from "../components/AppHeader";

export default function DetailLayout() {
    return (
        <>
            <AppHeader>
                {/* Qua passo all prop Children di AppHeader il contenuto */}
                <Link to="/" className="btn btn-outline-primary btn-sm">
                    Torna alla Home
                </Link>
            </AppHeader>
            <Outlet />
        </>
    );
}