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

interface products {
    ticketName: string
    price: number,
    units: number
}

export function Ticket (props: ticketProps) {
    
    const handleBuyTicket = () => {
        if (localStorage.getItem("products") === null) {
            localStorage.setItem("products", JSON.stringify([]))
        }

        let productsInCart = JSON.parse(localStorage.getItem("products") || "")
        const filterProducts = productsInCart.filter((item: products) => item.ticketName === props.ticketName)

        if (filterProducts.length > 0) {
            productsInCart.forEach((item: products) => {
                if (item.ticketName === props.ticketName) item.units += 1
            })
            localStorage.setItem("products", JSON.stringify(productsInCart))
        } else {
            localStorage.setItem("products", JSON.stringify([...productsInCart, {ticketName: props.ticketName, price: props.price, units: 1}]))
        }
        
    }
    
    return (
        <TicketCard>
            <img src={props.img}/>
            
            <h3>{props.ticketName}</h3>
            <p>{props.bandName}</p>
            <p id="price">R${props.price},00</p>
            <p>Horário: {props.startTime.toString()} - {props.endTime.toString()}</p>
            <p>Ingressos disponíveis: {props.ticketsAvailable}</p>

            <button onClick={handleBuyTicket}>Comprar</button>
        </TicketCard>
    )
}