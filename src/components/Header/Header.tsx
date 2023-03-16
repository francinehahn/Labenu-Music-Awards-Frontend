import { Link } from "react-router-dom"
import logo from "../../images/LAMA_logo.png"

export function Header () {
    return (
        <header>
            <img src={logo} alt="Logo da Labenu Music Awards"/>
            <nav>
                <Link to="">Shows</Link>
                <Link to="">Login</Link>
            </nav>
        </header>
    )
}