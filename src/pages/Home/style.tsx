import styled from "styled-components"


export const HomeSection = styled.section `
    background-color: black;
    min-height: 100vh;

    img {
        display: block;
        width: 100%;
    }

    h2 {
        color: white;
        text-align: center;
        margin: 8vh 0 5vh 0;
        font-size: 32px;
    }

    section {
        display: flex;
        justify-content: center;
        gap: 13vw;
        flex-wrap: wrap;
        padding-bottom: 5vh;

        .div-home {
            p {
                color: white;
            }

            .title-week-day {
                color: var(--dark-orange);
                font-size: 23px;
                padding: 1vh 0;
            }

            div {
                margin-bottom: 2vh;
                gap: 1vw;
            }
        }
    }

    button {
        margin: 1vh auto 5vh auto;
    }
`