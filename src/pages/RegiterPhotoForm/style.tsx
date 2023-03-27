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
    gap: 2vh;
    margin-top: 15vh;

    div {
        display: flex;
        flex-direction: column;

        p {
            font-size: 14px;
            color: red;
        }
    }

    button {
        margin-top: 2vh;
    }

    #error {
        font-size: 16px;
        color: red;
    }

    #successMessage {
        font-size: 16px;
        color: green;
    }
`