import { useEffect } from 'react'
import { BsTrash } from 'react-icons/bs'
import { CartSection, Units } from './style'

interface propsCart {
    ticketName: string,
    units: number,
    price: number,
    reload: boolean,
    setReload: any
}

interface products {
    id: string,
    ticketName: string
    price: number,
    units: number
}

export function CartCard(props: propsCart) {
    let productsInCart = JSON.parse(localStorage.getItem("products") || "")

    useEffect(() => {
        productsInCart = JSON.parse(localStorage.getItem("products") || "")
    }, [props.reload])

    const handleReduceUnit = () => {
        for (let ticket of productsInCart) {
            if (ticket.ticketName === props.ticketName && ticket.units > 1) ticket.units -= 1
        }

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    const handleIncreaseUnit = () => {
        for (let ticket of productsInCart) {
            ticket.ticketName === props.ticketName? ticket.units += 1 : ticket.units += 0
        }

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    const removeProduct = () => {
        productsInCart = productsInCart.filter((item: products) => item.ticketName !== props.ticketName)

        localStorage.setItem("products", JSON.stringify(productsInCart))
        props.setReload(!props.reload)
    }

    return (
        <CartSection>
            <p>{props.ticketName}</p>
            
            <Units>
                <button onClick={handleReduceUnit}>-</button>
                <p>{props.units}x</p>
                <button onClick={handleIncreaseUnit}>+</button>
            </Units>
            
            <span>
                <p>R${(props.price * props.units).toFixed(2).replace(".", ",")}</p>
                <BsTrash onClick={removeProduct}/>
            </span>
        </CartSection>
    )
}