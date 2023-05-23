import { Price, TicketSection } from "./style"

interface ticketProps {
    id: string,
    ticketName: string,
    price: number,
    ticketsAvailable: number,
    startTime: Date,
    endTime: Date,
    bandName: string,
    img: string,
    reload: boolean,
    setReload: any
}

interface products {
    id: string,
    ticketName: string
    price: number,
    units: number
}

export function TicketCard (props: ticketProps) {
    
    const handleAddTicketToCart = () => {
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
            props.setReload(!props.reload)
        } else {
            localStorage.setItem("products", JSON.stringify([...productsInCart, {id: props.id, ticketName: props.ticketName, price: props.price, units: 1}]))
            props.setReload(!props.reload)
        }
    }
    
    return (
        <TicketSection>
            <img src={props.img} alt="Imagem promocional do show"/>
            
            <div>
                <h4>{props.ticketName}</h4>
                <p>{props.bandName}</p>
                <Price>R${props.price},00</Price>
                <p>Horário: {props.startTime.toString()} - {props.endTime.toString()}</p>
                <p>Ingressos disponíveis: {props.ticketsAvailable}</p>
            </div>

            <button onClick={handleAddTicketToCart}>Comprar</button>
        </TicketSection>
    )
}