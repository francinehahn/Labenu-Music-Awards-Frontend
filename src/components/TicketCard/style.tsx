import styled from "styled-components"

export const TicketSection = styled.div `
    display: flex;
    flex-direction: column;
    padding: 2.5vh 1vw 3.5vh 1vw;
    background-color: white;
    border-radius: 5px;
    max-width: 18vw;

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    h3 {
        font-size: 24px;
        color: black;
        background-color: white;
        margin: 2vh 0 1vh 0;
    }

    p {
        font-size: 16px;
        color: black;
        background-color: white;
    }

    #price {
        font-size: 24px;
        font-weight: 600;
        color: green;
        background-color: white;
    }

    button {
        margin-top: 2.5vh;
    }
`