import { Outlet } from "react-router";
import AppFooter from "../components/AppFooter";

export default function MainLayout() {

    return (
        <>
            {/* Tolto AppHeader */}
            <main className="bg-light">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )

}