import styled from "styled-components"

export const TicketSection = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.25rem 1.25rem 1.875rem 1.25rem;
    background-color: #ffffff;
    border-radius: 5px;
    
    @media screen and (min-width: 800px) {
        min-width: 16.875rem; 
        max-width: 17.5rem;
    }
    @media screen and (max-width: 800px) {
        min-width: 18.125rem;
        max-width: 18.75rem;    
    }

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: .2rem;
        background-color: white;

        h4 {
            color: black;
            background-color: white;
            line-height: 1.5rem;
        }

        p {
            background-color: white;
        }
    }

    button {
        margin-bottom: 1rem;
    }
`

export const Price = styled.p `
    font-size: 1.5rem;
    font-weight: 600;
    color: green;
    background-color: white;
`