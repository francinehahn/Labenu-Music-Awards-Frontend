import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart/Cart"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { PhotoRegistration } from "../pages/PhotoRegistration/PhotoRegistration"
import { Photos } from "../pages/Photos/Photos"
import { Profile } from "../pages/Profile/Profile"
import { RegisterPhotoForm } from "../pages/RegiterPhotoForm/RegisterPhotoForm"
import { Signup } from "../pages/Signup/Signup"
import { Tickets } from "../pages/Tickets/Tickets"


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/fotos" element={<Photos/>}/>
                <Route path="/cadastro-fotos" element={<PhotoRegistration/>}/>
                <Route path="/ingressos" element={<Tickets/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/carrinho" element={<Cart/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cadastrar-foto" element={<RegisterPhotoForm/>}/>
            </Routes>        
        </BrowserRouter>
    )
}