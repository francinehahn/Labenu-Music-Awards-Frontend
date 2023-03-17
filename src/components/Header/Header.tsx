import { Link } from "react-router-dom"
import logo from "../../images/LAMA_logo.png"
import { HeaderSection } from "./style"


export function Header () {
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("role")
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