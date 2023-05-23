import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {AiOutlineShoppingCart} from 'react-icons/ai'
import logo from "../../images/LAMA_logo.png"

import { useRequestData } from "../../hooks/useRequestData"
import { baseUrl } from "../../constants/baseUrl"

import { HeaderDesktop, HeaderMobile, HeaderSection, MobileSymbol } from "./style"

interface headerProps {
    reload?: boolean
}

export function Header (props: headerProps) {
    const token = localStorage.getItem("token")
    let ticketsInCart = localStorage.getItem("products")
    const [showMobileMenu, setShowMobileMenu] = useState(false)
  
    if (token) {
        const [isLoadingUserData, userData, userError] = useRequestData(`${baseUrl}users/account`, true, token)
        if (!isLoadingUserData && !userData && userError) {
            localStorage.removeItem("token")
        }
    }

    useEffect(() => {
        ticketsInCart = localStorage.getItem("products")
    }, [props.reload])
    
    const handleLogout = () => {
        localStorage.removeItem("token")
    }

    const nav = () => {
        return (
            <nav>
                <Link to="/">Página inicial</Link>
                {token !== null && <Link to="/profile">Minha Conta</Link>}
                <Link to="/ingressos">Ingressos</Link>
                <Link to="/fotos">Fotos</Link>
                
                <span>
                    <Link to="/carrinho">Carrinho</Link>
                    <AiOutlineShoppingCart/>
                    {ticketsInCart !== null && JSON.parse(ticketsInCart).length > 0 &&
                    <p>{JSON.parse(ticketsInCart).length}</p>}
                </span>
                
                {token === null && <Link to="/login">Login</Link>}
                {token !== null && <Link to="/" onClick={handleLogout}>Logout</Link>}
            </nav>
        )
    }

    return (
        <HeaderSection>
            <img src={logo} alt="Logo da Labenu Music Awards"/>

            <HeaderDesktop>
                {nav()}
            </HeaderDesktop>

            <MobileSymbol onClick={() => setShowMobileMenu(true)}>
                <div></div>
                <div></div>
                <div></div>
            </MobileSymbol>

            {showMobileMenu && (
                <HeaderMobile>
                    <button onClick={() => setShowMobileMenu(false)}>X</button>
                    <div>{nav()}</div>
                </HeaderMobile>
            )}
        </HeaderSection>
    )
}