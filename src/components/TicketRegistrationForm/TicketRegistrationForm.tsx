import { useForm } from "../../hooks/useForm"

export function TicketRegistrationForm () {
    const token = localStorage.getItem("token")
    const [ticketForm, ticketOnChange] = useForm({ticketName: "", ticketsAvailable: "", price: "", concertId: ""})
    
    return (
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
    )
}