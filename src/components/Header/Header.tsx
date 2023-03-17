import { Link } from "react-router-dom"
import logo from "../../images/LAMA_logo.png"
import { HeaderSection } from "./style"


export function Header () {
    return (
        <HeaderSection>
            <img src={logo} alt="Logo da Labenu Music Awards"/>
            <nav>
                <Link to="/">Página inicial</Link>
                <Link to="/ingressos">Ingressos</Link>
                <Link to="/fotos">Fotos</Link>
                <Link to="/login">Login</Link>
            </nav>
        </HeaderSection>
    )
}