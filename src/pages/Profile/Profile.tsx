import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"


export function Profile () {
    useProtectedPage()
    
    return (
        <>
            <Header/>

            <Footer/>
        </>
    )
}