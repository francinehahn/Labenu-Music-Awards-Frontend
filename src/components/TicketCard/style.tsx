import styled from "styled-components"

export const TicketSection = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2vh;
    padding: 20px 20px 30px 20px;
    background-color: #ffffff;
    border-radius: 5px;
    
    @media screen and (min-width: 800px) {
        min-width: 270px; 
        max-width: 280px;    
    }
    @media screen and (max-width: 800px) {
        min-width: 290px; 
        max-width: 300px;    
    }

    div {
        background-color: white;

        img {
            width: 100%;
            border-radius: 5px 5px 0 0;
        }

        h4 {
            color: black;
            background-color: white;
            padding: 1vh 0;
            line-height: 4vh;
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
            padding: .5vh 0;
        }
    }

    button {
        margin-bottom: 1vh;
    }
`