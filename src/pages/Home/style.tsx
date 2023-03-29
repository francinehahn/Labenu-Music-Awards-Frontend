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
        flex-wrap: wrap;
        padding: 10vh 0 5vh 0;

        @media screen and (min-width: 1400px) {
            margin: 0 5vw;
            gap: 12vw;
        }
        @media screen and (min-width: 1000px) and (max-width: 1400px) {
            margin: 0 5vw;
            gap: 8vw;
        }
        @media screen and (min-width: 750px) and (max-width: 1000px) {
            margin: 0 10vw;
            gap: 8vw;
        }
        @media screen and (max-width: 750px) {
            margin: 0 15vw;
            gap: 8vw;
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
                gap: 1.5vw;
            }
        }
    }

    button {
        margin: 1vh auto 6vh auto;
    }
`