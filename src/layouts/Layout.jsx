import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="pt-32 max-w-7xl mx-auto text-white px-4 md:px-8 lg:px-16 space-y-14">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
