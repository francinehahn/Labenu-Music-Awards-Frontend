import styled from "styled-components"

export const PurchaseDiv = styled.div `
    display: flex;
    justify-content: center;
    gap: 5rem;
    border-bottom: 1px solid white;
    width: 52vw;

    @media screen and (min-width: 1200px) and (max-width: 1500px) {
        width: 60vw;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {
        width: 70vw;
        gap: 3rem;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        width: 80vw;
    }
    @media screen and (max-width: 800px) {
        width: 90vw;
        gap: 2rem;
    }

    p, h5 {
        color: white;
    }

    div {
        display: flex;
        gap: 5rem;

        @media screen and (max-width: 1200px) {
            gap: 3rem;
        }
        @media screen and (max-width: 800px) {
            gap: 2rem;
        }
    }
`