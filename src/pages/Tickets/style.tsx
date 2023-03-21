import styled from "styled-components"


export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 5vh 4vw 5vh 4vw;
    min-height: 68vh;

    h2 {
        font-size: 26px;
        margin: 5vh 0 2vh 0;
        color: var(--dark-orange);
    }

    .ticket-div {
        display: flex;
        gap: 2vw;
        flex-wrap: wrap;
        margin-bottom: 4vh;
    }

    .error {
        color: white;
        margin: 1vh 0;
    }
`