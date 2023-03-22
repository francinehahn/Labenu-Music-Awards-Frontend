import { BsTrash } from 'react-icons/bs'
import { CartCard, Units } from './style'

interface propsCart {
    ticketName: string,
    handleReduceUnit: () => {},
    handleIncreaseUnit: () => {},
    units: number,
    price: number,
    removeProduct: () => {}
}

export function Cart(props: propsCart) {    
    return (
        <CartCard>
            <p>{props.ticketName}</p>
            
            <Units>
                <button onClick={props.handleReduceUnit}>-</button>
                <p>{props.units}x</p>
                <button onClick={props.handleIncreaseUnit}>+</button>
            </Units>
            
            <p>R${(props.price * props.units).toFixed(2).replace(".", ",")}</p>

            <BsTrash onClick={props.removeProduct}/>
        </CartCard>
    )
}