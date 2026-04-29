import { Outlet } from "react-router";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function MainLayout() {

    return (
        <>
            <AppHeader />
            <main className="bg-light">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )

}