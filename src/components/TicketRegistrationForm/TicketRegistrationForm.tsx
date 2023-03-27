import axios from "axios"
import { useState } from "react"
import { validateTicketName } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import { useRequestData } from "../../hooks/useRequestData"
import { Loading } from "../Loading/Loading"
import { FormSection } from "./style"

interface concert {
    id: "7e1b3d15-7df5-41a3-a5c4-73897023ba5e",
    week_day: "friday",
    start_time: "08:00:00",
    end_time: "10:00:00",
    name: "Calypso",
    music_genre: "Calypso"
}

export function TicketRegistrationForm () {
    const token = localStorage.getItem("token")
    const [isLoadingConcerts, dataConcerts] = useRequestData('https://lama-fctv.onrender.com/concerts')
    const [ticketForm, ticketOnChange] = useForm({ticketName: "", ticketsAvailable: "", price: "", concertId: ""})
    const [isLoadingTicket, setIsLoadingTicket] = useState(false)
    const [ticketNameError, setTicketNameError] = useState("")
    const [ticketsAvailableError, setTicketsAvailableError] = useState("")
    const [priceError, setPriceError] = useState("")
    const [axiosTicketError, setAxiosTicketError] = useState("")
    const [successTicketMessage, setSuccessTicketMessage] = useState("")

    const allConcerts = dataConcerts && dataConcerts.map((item: concert) => {
        return <option key={item.id} value={item.id}>{item.name} - {item.week_day}</option>
    })
    
    const handleTicketRegistration = (e: any) => {
        e.preventDefault()
        setIsLoadingTicket(true)
        setTicketNameError("")
        setTicketsAvailableError("")
        setPriceError("")
        setAxiosTicketError("")
        
        if (!validateTicketName(ticketForm.ticketName)) {
            setTicketNameError("O nome dos ingressos deve ter pelo menos 8 caracteres.")
        }
        if (Number(ticketForm.ticketsAvailable) < 1000) {
            setTicketsAvailableError("Você deve disponibilizar pelo menos 1000 ingressos.")
        }
        if (Number(ticketForm.price) < 50) {
            setPriceError("O valor do ingresso não pode ser menos do que R$50,00.")
        }

        if (validateTicketName(ticketForm.ticketName) && Number(ticketForm.ticketsAvailable) >= 1000 && Number(ticketForm.price) >= 50){
            axios.post('https://lama-fctv.onrender.com/tickets/create', ticketForm, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoadingTicket(false)
                setSuccessTicketMessage("Ingresso cadastrado com sucesso!")
            }).catch(error => {
                setIsLoadingTicket(false)
                setAxiosTicketError(error.response.data)
            })
        }

        setIsLoadingTicket(false)
        return
    }

    return (
        <FormSection onSubmit={handleTicketRegistration}>
            <div>
                <label htmlFor="ticketName">Nome do ingresso</label>
                <input type={'text'} placeholder="Capital inicial: 25 anos" name="ticketName" value={ticketForm.ticketName} onChange={ticketOnChange}/>
                <p>{ticketNameError}</p>
            </div>

            <div>
                <label htmlFor="ticketsAvailable">Quantidade de ingressos</label>
                <input type={'number'} placeholder="25000" name="ticketsAvailable" value={ticketForm.ticketsAvailable} onChange={ticketOnChange}/>
                <p>{ticketsAvailableError}</p>
            </div>

            <div>
                <label htmlFor="price">Preço</label>
                <input type={'number'} placeholder="250" name="price" value={ticketForm.price} onChange={ticketOnChange}/>
                <p>{priceError}</p>
            </div>

            <div>
                <label htmlFor="concertId">Show</label>
                <select value={ticketForm.concertId} name="concertId" onChange={ticketOnChange}>
                    <option>Selecione</option>
                    {isLoadingConcerts && <option>Carregando...</option>}
                    {!isLoadingConcerts && dataConcerts && allConcerts}
                </select>
            </div>

            <p id="error">{axiosTicketError}</p>
            <p id="successMessage">{successTicketMessage}</p>

            <button>{isLoadingTicket? <Loading color="orange"/> : 'Registrar ingresso'}</button>
        </FormSection>
    )
}