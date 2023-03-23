import styled from "styled-components"


export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 5vh 4vw 5vh 4vw;
    min-height: 68vh;

    #loading {
        margin-top: 30vh;
    }

    h2 {
        font-size: 26px;
        margin: 5vh 0 2vh 0;
        color: var(--dark-orange);
    }

    .ticket-div {
        display: flex;
        gap: 2vw;
        margin-bottom: 4vh;
        padding-bottom: 1vh;
        overflow-x: scroll;

        ::-webkit-scrollbar {
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #E2E2E2;
            width: 5px;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #c2c2c2;
            border-radius: 20px;
        }
    }

    .error {
        color: white;
        margin: 1vh 0;
    }
`