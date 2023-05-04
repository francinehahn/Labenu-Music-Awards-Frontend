import { useState } from "react"
import { BandRegistrationForm } from "../../components/BandRegistrationForm/BandRegistrationForm"
import { ConcertRegistrationForm } from "../../components/ConcertRegistrationForm/ConcertRegistrationForm"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { PurchaseCard } from "../../components/PurchaseCard/PurchaseCard"
import { TicketRegistrationForm } from "../../components/TicketRegistrationForm/TicketRegistrationForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { ProfileSection } from "./style"
import { baseUrl } from "../../constants/baseUrl"

interface purchase {
    ticket_name: string,
    price: number,
    units: number,
    total_price: number
}

export function Profile () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const [reload, setReload] = useState(false)
    const [isLoadingPurchases, dataPurchases, errorPurchases] = useRequestData(`${baseUrl}tickets/purchases`, reload, token)
    const [isLoadingUser, dataUser] = useRequestData(`${baseUrl}users/account`, reload, token)

    const renderDataPurchases = dataPurchases && dataPurchases.map((item: purchase, index: number) => {
        return <PurchaseCard
                    key={index}
                    ticketName={item.ticket_name}
                    units={item.units}
                    totalPrice={item.total_price}
                />
    })

    return (
        <>
            <Header/>

            <ProfileSection>
                {!isLoadingUser && dataUser && <div id="userInfo"><p>Usuário: {dataUser.name}</p></div>}

                {isLoadingPurchases && <div id="loadingDiv"><Loading color="black"/></div>}
                {!isLoadingPurchases && dataPurchases && (
                    <div id="purchases">
                        <h3>Minhas compras:</h3>
                        {renderDataPurchases}
                    </div>
                )}
                {!isLoadingPurchases && !dataPurchases &&errorPurchases && <p>{errorPurchases}</p>}


                {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && (
                    <>
                        <h3 className="registrationTitle">Registrar nova banda</h3>
                        <BandRegistrationForm reload={reload} setReload={setReload}/>

                        <h3 className="registrationTitle">Registrar novo show</h3>
                        <ConcertRegistrationForm reload={reload} setReload={setReload}/>

                        <h3 className="registrationTitle">Registrar novo ingresso</h3>
                        <TicketRegistrationForm reload={reload} setReload={setReload}/> 
                    </>
                )}
            </ProfileSection>

            <Footer/>
        </>
    )
}