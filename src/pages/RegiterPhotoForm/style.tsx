import styled from "styled-components";


export const Unauthorized = styled.h4 `
    text-align: center;
    color: white;
    margin-top: 15vh;
`

export const LoadingDiv = styled.div `
    margin-top: 20vh;
`

export const PhotoForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .7rem;
    margin-top: 7rem;

    div {
        display: flex;
        flex-direction: column;

        p {
            font-size: .875rem;
            color: red;
        }
    }
`

export const Error = styled.p `
    font-size: 1rem;
    color: red;
`

export const SuccessMessage = styled.p `
    font-size: 1rem;
    color: green;
`