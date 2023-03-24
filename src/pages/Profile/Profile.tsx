import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"
import { PurchaseCard } from "../../components/PurchaseCard/PurchaseCard"
import { useForm } from "../../hooks/useForm"
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
    const [bandForm, bandOnChange] = useForm({name: "", musicGenre: "", responsible: ""})
    const [concertForm, concertOnChange] = useForm({weekday: "", startTime: "", endTime: "", band: ""})
    const [ticketForm, ticketOnChange] = useForm({ticketName: "", ticketsAvailable: "", price: "", concert: ""})
    
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
                        <form>
                            <div>
                                <label htmlFor="name">Nome da banda</label>
                                <input type={'text'} placeholder="Capital Inicial" name="name" value={bandForm.name} onChange={bandOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="genre">Gênero musical</label>
                                <input type={'text'} placeholder="Rock" name="genre" value={bandForm.musicGenre} onChange={bandOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="responsible">Responsável pela banda</label>
                                <input type={'text'} placeholder="João Soares" name="responsible" value={bandForm.responsible} onChange={bandOnChange}/>
                            </div>

                            <button>Registrar banda</button>
                        </form>


                        <h3 className="registrationTitle">Registrar novo show</h3>
                        <form>
                            <div>
                                <label htmlFor="weekday">Dia da semana</label>
                                <input type={'text'} placeholder="Sexta-feira" name="weekday" value={concertForm.weekday} onChange={concertOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="startTime">Horário de início</label>
                                <input type={'text'} placeholder="15:00:00" name="startTime" value={concertForm.startTime} onChange={concertOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="endTime">Horário de encerramento</label>
                                <input type={'text'} placeholder="17:00:00" name="endTime" value={concertForm.endTime} onChange={concertOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="bandId">Banda</label>
                                <select>
                                    <option>Selecione</option>
                                </select>
                            </div>

                            <button>Registrar show</button>
                        </form>


                        <h3 className="registrationTitle">Registrar novo ingresso</h3>
                        <form>
                            <div>
                                <label htmlFor="ticketName">Nome do ingresso</label>
                                <input type={'text'} placeholder="Capital inicial: 25 anos" name="ticketName" value={ticketForm.ticketName} onChange={ticketOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="ticketsAvailable">Quantidade de ingressos</label>
                                <input type={'number'} placeholder="25000" name="ticketsAvailable" value={ticketForm.ticketsAvailable} onChange={ticketOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="price">Preço</label>
                                <input type={'number'} placeholder="250" name="price" value={ticketForm.price} onChange={ticketOnChange}/>
                            </div>

                            <div>
                                <label htmlFor="concertId">Show</label>
                                <select>
                                    <option>Selecione</option>
                                </select>
                            </div>

                            <button>Registrar ingresso</button>
                        </form>
                    </>
                )}
            </ProfileSection>

            <Footer/>
        </>
    )
}