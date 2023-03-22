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
    [ticketName: string]: {
        price: number,
        units: number
    }
}

export function Ticket (props: ticketProps) {
    const handleBuyTicket = () => {
        if (localStorage.getItem("products") === null) {
            const newProduct: products = {
                [props.ticketName]: {price: props.price, units: 1}
            }
            localStorage.setItem("products", JSON.stringify(newProduct))
            return
        }

        let productsInCart: any = localStorage.getItem("products")
        
        if (productsInCart[props.ticketName]) {
            productsInCart[props.ticketName].units += 1 
            //localStorage.setItem("products", JSON.stringify(productsInCart))
        } else {
            productsInCart[props.ticketName] = {
                price: props.price,
                units: 1
            }
            //localStorage.setItem("products", JSON.stringify([...productsInCart, {ticketName: props.ticketName, price: props.price, units: 1}]))
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