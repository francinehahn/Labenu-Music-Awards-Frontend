import styled from "styled-components"


export const CartSection = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    padding: 0 5rem 1rem 5rem;
    border-bottom: .5px solid grey;
    margin-bottom: 1rem;
    width: 80vw;

    @media screen and (max-width: 1050px) {
        gap: 2rem;
        padding: 0 2rem 1rem 2rem;
        width: 90vw;
    }
    @media screen and (max-width: 650px) {
        flex-direction: column;
        gap: .5rem;
        width: 95vw;
    }

    p {
        text-align: center;
        color: white;
    }

    span {
        display: flex;
        gap: 5rem;

        @media screen and (max-width: 1050px) {
            gap: 2rem;
        }

        svg {
            color: white;
            width: 1.4rem;
            height: 1.4rem;
            cursor: pointer;
            :hover {
                opacity: .5;
            }
        }
    }
`

export const Units = styled.div `
    display: flex;
    align-items: baseline;
    gap: .5rem;
    
    button {
        font-size: 1rem;
        padding: .3rem .7rem;
        border: none;
        cursor: pointer;
    }
    p {
        font-size: 1rem;
    }
`