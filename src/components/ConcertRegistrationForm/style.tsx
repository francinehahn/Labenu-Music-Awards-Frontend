import styled from "styled-components"


export const FormSection = styled.form `
    div {
        p {
            color: red;
            font-size: 14px;
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
    }

    #error {
        color: red;
        font-size: 14px;
        text-align: center;

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

    #successMessage {
        color: green;
        font-size: 16px;
        text-align: center;
    }
`