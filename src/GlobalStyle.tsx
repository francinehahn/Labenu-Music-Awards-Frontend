import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background-color: black;
    }

    :root {
        --dark-orange: #F47C00;
        --light-orange: #ffa071;
        --light-grey: #bababa;
        --dark-grey: #33333352;
    }

    input {
        width: 25vw;
        font-size: 16px;
        padding: .5vh;
        :focus {
            outline: none;
        }
        @media screen and (min-width: 1200px) {
            width: 30vw;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            width: 35vw;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 45vw;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 60vw;
        }
        @media screen and (max-width: 600px) {
            width: 80vw;
        }
    }

    button {
        display: block;
        margin: 4vh auto 6vh auto;
        border: none;
        border-radius: 35px;
        padding: 1.5vh 3vw;
        font-size: 18px;
        font-weight: 600;
        color: white;
        background-color: var(--dark-orange);
        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }
`