import { TicketCard } from "./style"

interface ticketProps {
    ticketName: string,
    price: number,
    ticketsAvailable: number,
    startTime: Date,
    endTime: Date,
    bandName: string,
    img: string
}

export function Ticket (props: ticketProps) {
    return (
        <TicketCard>
            <img src={props.img}/>
            
            <h3>{props.ticketName}</h3>
            <p>{props.bandName}</p>
            <p id="price">R${props.price},00</p>
            <p>Horário: {props.startTime.toString()} - {props.endTime.toString()}</p>
            <p>Ingressos disponíveis: {props.ticketsAvailable}</p>

            <button>Comprar</button>
        </TicketCard>
    )
}