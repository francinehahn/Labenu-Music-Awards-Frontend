import styled from "styled-components"


export const FormSection = styled.form `
    div {
        p {
            color: red;
            font-size: .875rem;
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
`

export const AxiosError = styled.p `
    color: red;
    font-size: .875rem;
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
`

export const SuccessMessage = styled.p `
    color: green;
    font-size: 1rem;
    text-align: center;
`