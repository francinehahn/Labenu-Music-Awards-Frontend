import { PurchaseDiv } from "./style"


interface purchaseProps {
    ticketName: string,
    units: number,
    totalPrice: number
}

export function PurchaseCard (props: purchaseProps) {
    return (
        <PurchaseDiv>
            <div>
                <h5>{props.ticketName}</h5>
                <p>{props.units}x</p>
            </div>
            <p>Preço total: R${props.totalPrice},00</p>
        </PurchaseDiv>
    )
}