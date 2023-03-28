import styled from "styled-components"


export const TicketsSection = styled.section `
    display: flex;
    flex-direction: column;
    min-height: 68vh;

    @media screen and (min-width: 900px) {
        margin: 15vh 1vw;
        gap: 15vh;
    }
    @media screen and (max-width: 900px) {
        margin: 9vh 6vw 9vh 6vw;
        gap: 10vh;
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
                padding: 10px;
                background: linear-gradient(90deg, #333333, #202020, #000000);
                opacity: .2;

                :hover {
                    opacity: .8;
                }

                svg {
                    height: 35px;
                    width: 35px;
                    background-color: transparent;
                }
            }
        }
    }

    .ticket-div {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
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