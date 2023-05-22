import styled from "styled-components"

export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    min-height: 68vh;
    margin: 5rem 1rem;
    gap: 5rem;
`

export const Error = styled.p `
    color: red;
    margin: 1rem 0;
`

export const LoadingDiv = styled.div `
    margin-top: 30vh;
`

export const ButtonScroll = styled.button `
    @media screen and (max-width: 900px) {
        display: none;
    }

    @media screen and (min-width: 900px) {
        border-radius: 5px;
        padding: .625rem;
        background: linear-gradient(90deg, #333333, #202020, #000000);
        opacity: .2;

        :hover {
            opacity: .8;
        }

        svg {
            height: 2.18rem;
            width: 2.18rem;
            background-color: transparent;
        }
    }
`

export const TicketDivWrapper = styled.div `
    display: flex;
    gap: .5vw;
`

export const TicketDiv = styled.div `
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
        display: none;
    }
`