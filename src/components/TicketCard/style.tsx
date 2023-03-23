import styled from "styled-components"

export const TicketSection = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px 20px 40px 20px;
    background-color: white;
    border-radius: 5px;
    @media screen and (min-width: 800px) {
        min-width: 270px; 
        max-width: 280px;    
    }
    @media screen and (max-width: 800px) {
        min-width: 290px; 
        max-width: 300px;    
    }

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    h3 {
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