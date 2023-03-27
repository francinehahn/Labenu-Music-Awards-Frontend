import axios from "axios"
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

interface purchase {
    ticket_name: string,
    price: number,
    units: number,
    total_price: number
}

export function Profile () {
    useProtectedPage()

    const token = localStorage.getItem("token")
    const [isLoadingPurchases, dataPurchases, errorPurchases] = useRequestData('https://lama-fctv.onrender.com/tickets/purchases', token)
    const [isLoadingUser, dataUser, errorUser] = useRequestData('https://lama-fctv.onrender.com/users/account', token)
    

    const renderDataPurchases = dataPurchases && dataPurchases.map((item: purchase, index: number) => {
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
                {isLoadingUser && <Loading color="black"/>}
                {!isLoadingUser && dataUser && <p id="userInfo">Usuário: {dataUser.name}</p>}

                <h3>Minhas compras:</h3>
                {isLoadingPurchases && <Loading color="black"/>}
                {!isLoadingPurchases && dataPurchases && renderDataPurchases}
                {!isLoadingPurchases && !dataPurchases &&errorPurchases && <p>{errorPurchases}</p>}


                {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && (
                    <>
                        <h3 className="registrationTitle">Registrar nova banda</h3>
                        <BandRegistrationForm/>

                        <h3 className="registrationTitle">Registrar novo show</h3>
                        <ConcertRegistrationForm/>

                        <h3 className="registrationTitle">Registrar novo ingresso</h3>
                        <TicketRegistrationForm/> 
                    </>
                )}
            </ProfileSection>

            <Footer/>
        </>
    )
}