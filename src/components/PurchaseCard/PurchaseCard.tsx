import { PurchaseDiv } from "./style"


interface purchaseProps {
    ticketName: string,
    price: number,
    units: number,
    totalPrice: number
}

export function PurchaseCard (props: purchaseProps) {
    return (
        <PurchaseDiv>
            <h3>{props.ticketName}</h3>
            <p>R${props.price},00</p>
            <p>{props.units}x</p>
            <p>Preço total: R${props.totalPrice},00</p>
        </PurchaseDiv>
    )
}