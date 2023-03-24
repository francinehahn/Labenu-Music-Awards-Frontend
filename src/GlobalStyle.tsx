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

    label {
        font-size: 16px;
        color: white;
    }

    input, select {
        background-color: white;
        width: 25vw;
        font-size: 16px;
        color: black;
        padding: .7vh .5vw;
        border: none;
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
        margin: 0 auto 0 auto;
        border: none;
        border-radius: 35px;
        padding: 8px 45px;
        font-size: 18px;
        font-weight: 600;
        color: white;
        background-color: var(--dark-orange);
        :hover {
            opacity: .8;
            cursor: pointer;
        }
    }

    option {
        background-color: white;
        color: black;
    }

    h2 {
        @media screen and (min-width: 1000px) {
            font-size: 32px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 28px;
        }
    }

    h3 {
        @media screen and (min-width: 1000px) {
            font-size: 28px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 24px;
        }
    }

    h4 {
        @media screen and (min-width: 1000px) {
            font-size: 22px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 18px;
        }
    }

    h5 {
        @media screen and (min-width: 1000px) {
            font-size: 20px;
        }
        @media screen and (max-width: 1000px) {
            font-size: 18px;
        }
    }
`