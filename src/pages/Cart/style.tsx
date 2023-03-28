import styled from "styled-components"

export const CartSection = styled.section `
    margin-top: 6vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1000px) {
        min-height: 60vh;
    }
    @media screen and (min-width: 770px) and (max-width: 1000px) {
        min-height: 65vh;
    }
    @media screen and (min-width: 600px) and (max-width: 770px) {
        min-height: 62vh;
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        min-height: 58vh;
    }
    @media screen and (max-width: 500px) {
        min-height: 60vh;
    }

    #totalPrice {
        color: red;
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }

    #empty-cart {
        color: white;
        font-size: 18px;
        text-align: center;
        padding: 34vh 0;
    }
`

export const ButtonDiv = styled.div `
    button {
        margin-bottom: 5vh;
    }
`