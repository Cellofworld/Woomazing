import { Route, Routes } from "react-router-dom"
import Brands from "../pages/brands/Brands"
import Cart from "../pages/cart/Cart"
import Contacts from "../pages/contacts/Contacts"
import Home from "../pages/home/Home"
import Magazine from "../pages/magazine/Magazine"
import MakingOrder from "../pages/makingOrder/MakingOrder"
import NotFound from "../pages/notFound/NotFound"
import OneProductPage from "../pages/oneProduct/OneProductPage"
import SuccessOrderPage from "../pages/succsessOrderPage/SuccessOrderPage"
import Layout from "./Layout"


function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home /> } />
                    <Route path="magazine" element={<Magazine />} />
                    <Route path="magazine/:category/:id" element={<OneProductPage />} />
                    <Route path="brands" element={<Brands />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="cart/order" element={<MakingOrder />}  />
                    <Route path="cart/order/success" element={<SuccessOrderPage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routing