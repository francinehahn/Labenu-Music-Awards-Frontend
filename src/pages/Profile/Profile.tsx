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
import { LoadingDiv, ProfileSection, Purchases, Title, UserInfo } from "./style"
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
                {!isLoadingUser && dataUser && (
                    <UserInfo>
                        <p>Usuário: {dataUser.name}</p>
                    </UserInfo>
                )}

                {isLoadingPurchases && <LoadingDiv><Loading color="black"/></LoadingDiv>}
                
                {!isLoadingPurchases && dataPurchases && (
                    <Purchases>
                        <h3>Minhas compras:</h3>
                        {renderDataPurchases}
                    </Purchases>
                )}
                {!isLoadingPurchases && !dataPurchases &&errorPurchases && <p>{errorPurchases}</p>}


                {!isLoadingUser && dataUser && dataUser.role === "ADMIN" && (
                    <>
                        <Title>Registrar nova banda</Title>
                        <BandRegistrationForm reload={reload} setReload={setReload}/>

                        <Title>Registrar novo show</Title>
                        <ConcertRegistrationForm reload={reload} setReload={setReload}/>

                        <Title>Registrar novo ingresso</Title>
                        <TicketRegistrationForm reload={reload} setReload={setReload}/> 
                    </>
                )}
            </ProfileSection>

            <Footer/>
        </>
    )
}