import styled from "styled-components"


export const FormSection = styled.form `
    div {
        p {
            color: red;
            font-size: .875rem;
            width: 30rem;

            @media screen and (max-width: 1000px) {
                width: 25rem;
            }
            @media screen and (max-width: 600px) {
                width: 20rem;
            }
        }
    }
`

export const AxiosError = styled.p `
    color: red;
    font-size: .875rem;
    text-align: center;
    width: 30rem;

    @media screen and (max-width: 1000px) {
        width: 25rem;
    }
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`

export const SuccessMessage = styled.p `
    color: green;
    font-size: 1rem;
    text-align: center;
`