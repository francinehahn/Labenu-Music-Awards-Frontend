import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Login } from "../pages/Login/Login"
import { Photos } from "../pages/Photos/Photos"
import { Profile } from "../pages/Profile/Profile"
import { Signup } from "../pages/Signup/Signup"
import { Tickets } from "../pages/Tickets/Tickets"


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/fotos" element={<Photos/>}/>
                <Route path="/ingressos" element={<Tickets/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>        
        </BrowserRouter>
    )
}