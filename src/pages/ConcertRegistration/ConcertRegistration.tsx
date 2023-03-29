import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useProtectedPage } from "../../hooks/useProtectedPage"


export function ConcertRegistration () {
    useProtectedPage()

    return (
        <>
            <Header/>

            <Footer/>
        </>
    )
}