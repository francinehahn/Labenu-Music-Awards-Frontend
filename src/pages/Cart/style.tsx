import styled from "styled-components"

export const CartSection = styled.section `
    margin-top: 4rem;
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
`

export const ButtonDiv = styled.div `
    button {
        margin: 3rem auto;
    }
`

export const TotalPrice = styled.p `
    color: green;
    font-size: 1.3rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
`

export const EmptyCart = styled.p `
    color: white;
    font-size: 1.125rem;
    text-align: center;
    padding: 27vh 0 38vh 0;
`