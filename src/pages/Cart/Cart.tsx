import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"

import { baseUrl } from "../../constants/baseUrl"
import { CartCard } from "../../components/CartCard/CartCard"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Loading } from "../../components/Loading/Loading"

import { ButtonDiv, CartSection, EmptyCart, TotalPrice } from "./style"

interface products {
    id: string,
    ticketName: string
    price: number,
    units: number
}

export function Cart () {
    const token = localStorage.getItem("token")
    let productsInCart = localStorage.getItem("products")
    const [reload, setReload] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()

    useEffect(() => {
        productsInCart = localStorage.getItem("products")
    }, [reload])
    
    const handlePayment = () => {
        if (token === null) {
            navigate("/login")
        } else {
            setIsLoading(true)
            
            let body = []
            for (let ticket of JSON.parse(productsInCart || "")) {
                body.push({
                    ticketId: ticket.id,
                    units: ticket.units
                })
            }

            axios.post(`${baseUrl}tickets/purchase`, {tickets: body}, {
                headers: {
                    Authorization: token
                }
            }).then(() => {
                setIsLoading(false)
                localStorage.removeItem("products")
                setReload(!reload)
                alert("Pagamento realizado com sucesso!")
            }).catch(error => {
                alert(error.response.data)
                setIsLoading(false)
            })
        }
    }

    let totalPrice = 0
    const renderData = productsInCart && JSON.parse(productsInCart).map((item: products) => {
        totalPrice += item.price * item.units
        return (
            <CartCard
                key={item.id}
                ticketName={item.ticketName}
                units={item.units}
                price={item.price}
                reload={reload}
                setReload={setReload}
            />
        )
    })

    return (
        <>
            <Header reload={reload}/>

            <CartSection>
                {(productsInCart === null || JSON.parse(productsInCart).length === 0) && <EmptyCart>Carrinho vazio.</EmptyCart>}
                {renderData}
                {totalPrice > 0 && <TotalPrice>Valor total: R${totalPrice.toFixed(2).toString().replace(".", ",")}</TotalPrice>}
            </CartSection>

            <ButtonDiv>
                {productsInCart !== null && JSON.parse(productsInCart).length > 0 && <button onClick={handlePayment}>{isLoading? <Loading color={"orange"}/> : "Finalizar a compra"}</button>}
            </ButtonDiv>

            <Footer/>
        </>
    )
}