import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background-color: black;
    }

    body {
        ::-webkit-scrollbar {
            width: .75rem;
            background-color: #434343;
        }
        ::-webkit-scrollbar-track {
            background: #434343;
            border-radius: 1.25rem;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #757575;
            border-radius: 1.25rem;
        }
    }

    :root {
        --dark-orange: #F47C00;
        --light-orange: #ffa071;
        --light-grey: #bababa;
        --dark-grey: #33333352;
    }

    label {
        font-size: 1rem;
        color: white;
    }

    input, select {
        background-color: white;
        font-size: 1rem;
        color: black;
        padding: .3rem;
        border: none;
        width: 30rem;

        :focus {
            outline: none;
        }
    
        @media screen and (max-width: 1000px) {
            width: 25rem;
        }
        @media screen and (max-width: 600px) {
            width: 20rem;
        }
    }

    button {
        display: block;
        margin: 0 auto 0 auto;
        border: none;
        border-radius: 2.19rem;
        padding: .5rem 2.81rem;
        font-size: 1.125rem;
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
            font-size: 2rem;
        }
        @media screen and (max-width: 1000px) {
            font-size: 1.75rem;
        }
    }

    h3 {
        @media screen and (min-width: 1000px) {
            font-size: 1.75rem;
        }
        @media screen and (max-width: 1000px) {
            font-size: 1.5rem;
        }
    }

    h4 {
        @media screen and (min-width: 1000px) {
            font-size: 1.375rem;
        }
        @media screen and (max-width: 1000px) {
            font-size: 1.125rem;
        }
    }

    h5 {
        @media screen and (min-width: 1000px) {
            font-size: 1.25rem;
        }
        @media screen and (max-width: 1000px) {
            font-size: 1.125rem;
        }
    }
`