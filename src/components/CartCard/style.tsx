import styled from "styled-components"


export const CartSection = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    border-bottom: 1px solid grey;
    margin-bottom: 5vh;

    @media screen and (min-width: 750px) {
        gap: 5vw;
        padding: 0 5vw;
    }
    @media screen and (min-width: 630px) and (max-width: 750px) {
        gap: 5vw;
        padding: 0 4vw;
    }
    @media screen and (max-width: 630px) {
        gap: 3vw;
        padding: 0 4vw;
    }

    p {
        margin-bottom: 1vh;
        color: white;
    }

    svg {
        color: white;
        width: 25px;
        height: 25px;
        margin-bottom: 1vh;
        cursor: pointer;
        :hover {
            opacity: .5;
        }
    }
`

export const Units = styled.div `
    display: flex;
    margin-bottom: 1vh;
    
    @media screen and (min-width: 1000px) {
        height: 5vh;
    }
    @media screen and (max-width: 1000px) {
        height: 4vh;
    }
    
    button {
        font-size: 18px;
        padding: 0 13px;
        border: none;
        cursor: pointer;
    }
    p {
        font-size: 16px;
        padding: 7px 11px;
        margin-bottom: 1vh;
    }
`