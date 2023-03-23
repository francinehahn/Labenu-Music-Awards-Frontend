import styled from "styled-components"


export const HomeSection = styled.section `
    background-color: black;
    min-height: 100vh;

    img {
        width: 100%;
    }

    #imgDesktop {
        @media screen and (min-width: 800px) {
            display: block;
        }
        @media screen and (max-width: 800px) {
            display: none;
        }
    }

    #imgMobile {
        @media screen and (min-width: 800px) {
            display: none;
        }
        @media screen and (max-width: 800px) {
            display: block;
        }
    }

    h2 {
        color: white;
        text-align: center;
        margin: 8vh 0 5vh 0;
    }

    section {
        display: flex;
        justify-content: center;
        gap: 13vw;
        flex-wrap: wrap;
        padding-bottom: 5vh;
        @media screen and (min-width: 1000px) {
            margin: 0 5vw;
        }
        @media screen and (min-width: 750px) and (max-width: 1000px) {
            margin: 0 10vw;
        }
        @media screen and (max-width: 750px) {
            margin: 0 15vw;
        }

        .div-home {
            p {
                color: white;
            }

            .title-week-day {
                color: var(--dark-orange);
                padding: 1vh 0;
            }

            div {
                margin-bottom: 2vh;
                gap: 1vw;
            }
        }
    }

    button {
        margin: 1vh auto 6vh auto;
    }
`