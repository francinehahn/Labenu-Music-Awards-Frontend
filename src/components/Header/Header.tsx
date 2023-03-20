import { Link } from "react-router-dom"
import logo from "../../images/LAMA_logo.png"
import { HeaderSection } from "./style"


export function Header () {
    const token = localStorage.getItem("token")

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
                <Link to="/carrinho">Carrinho</Link>
                {token === null && <Link to="/login">Login</Link>}
                {token !== null && <Link to="/" onClick={handleLogout}>Logout</Link>}
            </nav>
        </HeaderSection>
    )
}