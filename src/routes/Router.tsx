import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BandRegistration } from "../pages/BandRegistration/BandRegistration"
import { Cart } from "../pages/Cart/Cart"
import { ConcertRegistration } from "../pages/ConcertRegistration/ConcertRegistration"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { PhotoRegistration } from "../pages/PhotoRegistration/PhotoRegistration"
import { Photos } from "../pages/Photos/Photos"
import { Profile } from "../pages/Profile/Profile"
import { Signup } from "../pages/Signup/Signup"
import { TicketRegistration } from "../pages/TicketRegistration.tsx/TicketRegistration"
import { Tickets } from "../pages/Tickets/Tickets"


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/fotos" element={<Photos/>}/>
                <Route path="/cadastro-fotos" element={<PhotoRegistration/>}/>
                <Route path="/ingressos" element={<Tickets/>}/>
                <Route path="/cadastro-ingressos" element={<TicketRegistration/>}/>
                <Route path="/cadastro-bandas" element={<BandRegistration/>}/>
                <Route path="/cadastro-shows" element={<ConcertRegistration/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>        
        </BrowserRouter>
    )
}