import { useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../images/LAMA_logo.png"
import { HeaderSection } from "./style"
import {AiOutlineShoppingCart} from 'react-icons/ai'

interface headerProps {
    reload?: boolean
}

export function Header (props: headerProps) {
    const token = localStorage.getItem("token")
    let ticketsInCart = localStorage.getItem("products")

    useEffect(() => {
        ticketsInCart = localStorage.getItem("products")
    }, [props.reload])
    
    const handleLogout = () => {
        localStorage.removeItem("token")
    }

    return (
        <HeaderSection>
            <img src={logo} alt="Logo da Labenu Music Awards"/>
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
        </HeaderSection>
    )
}