import { Outlet } from "react-router-dom";
import "./layout.css";
import "../css/main.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";
import Number from "../components/number/Number";
import ShopBag from "../components/shopBag/ShopBag";



function Layout() {




    return (
        <>
            <header className="layout">
                <Logo />
                <Navigation />
                <Number />
                <ShopBag />
            </header>

            <Outlet />

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout