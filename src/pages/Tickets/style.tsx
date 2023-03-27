import styled from "styled-components"


export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    gap: 5vh;
    min-height: 68vh;

    @media screen and (min-width: 900px) {
        margin: 5vh 1vw 5vh 1vw;
    }
    @media screen and (max-width: 900px) {
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

    .ticket-div-wrapper {
        display: flex;
        gap: .5vw;

        .buttonScroll {
            @media screen and (max-width: 900px) {
                display: none;
            }

            @media screen and (min-width: 900px) {
                border-radius: 5px;
                padding: 20px;
                background: linear-gradient(90deg, #4d4d4d, #434343, #252525);
                opacity: .3;
                :hover {
                    opacity: 1;
                }
            }
        }
    }

    .ticket-div {
        display: flex;
        overflow-x: auto;
        ::-webkit-scrollbar {
            display: none;
        }

        @media screen and (min-width: 700px) {
            gap: 1vw;
        }
        @media screen and (max-width: 700px) {
            gap: 5vw;
        }
    }

    .error {
        color: white;
        margin: 1vh 0;
    }
`