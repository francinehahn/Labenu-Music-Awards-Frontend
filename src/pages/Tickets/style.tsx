import styled from "styled-components"


export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    min-height: 68vh;
    @media screen and (min-width: 600px) {
        margin: 5vh 4vw 5vh 4vw;
    }
    @media screen and (max-width: 600px) {
        margin: 5vh 6vw 5vh 6vw;
    }

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
        @media screen and (min-width: 700px) {
            gap: 2vw;
        }
        @media screen and (max-width: 700px) {
            gap: 5vw;
        }
        margin-bottom: 4vh;
        padding-bottom: 1vh;
        overflow-x: scroll;

        ::-webkit-scrollbar {
            height: 5px;
            background-color: #434343;
        }
        ::-webkit-scrollbar-track {
            background: #434343;
            width: 5px;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #757575;
            border-radius: 20px;
        }
    }

    .error {
        color: white;
        margin: 1vh 0;
    }
`