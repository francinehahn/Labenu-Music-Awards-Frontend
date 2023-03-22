import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { PurchaseCard } from "../../components/PurchaseCard/PurchaseCard"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { ProfileSection } from "./style"

interface purchase {
    ticket_name: string,
    price: number,
    units: number,
    total_price: number
}

export function Profile () {
    useProtectedPage()
    const token = localStorage.getItem("token")
    const [isLoading, data, error] = useRequestData('https://lama-fctv.onrender.com/tickets/purchases', token)
    
    const renderData = data && data.map((item: purchase, index: number) => {
        return <PurchaseCard
                    key={index}
                    ticketName={item.ticket_name}
                    price={item.price}
                    units={item.units}
                    totalPrice={item.total_price}
                />
    })

    return (
        <>
            <Header/>

            <ProfileSection>
                <h2>Minhas compras:</h2>
                {isLoading && <Loading color="black"/>}
                {!isLoading && data && renderData}
            </ProfileSection>

            <Footer/>
        </>
    )
}