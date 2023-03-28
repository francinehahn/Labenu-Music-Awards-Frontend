import styled from "styled-components"


export const PurchaseDiv = styled.div `
    display: flex;
    justify-content: center;
    gap: 7vw;
    border-bottom: 1px solid white;

    p, h5 {
        color: white;
    }

    div {
        display: flex;
        gap: 7vw;
    }

    @media screen and (min-width: 1500px) {
        width: 52vw;
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
        width: 60vw;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        width: 70vw;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        width: 80vw;
    }
    @media screen and (max-width: 800px) {
        width: 90vw;
    }
`