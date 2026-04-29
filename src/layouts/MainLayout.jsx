import { Outlet } from "react-router";
import Header from "../components/AppHeader";
import Footer from "../components/AppFooter";

export default function MainLayout() {

    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )

}