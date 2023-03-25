import styled from "styled-components"


export const FormSection = styled.form `
    div {
        p {
            color: red;
            font-size: 14px;
        }
    }

    #error {
        color: red;
        font-size: 14px;
        text-align: center;
    }

    #successMessage {
        color: green;
        font-size: 16px;
        text-align: center;
    }

    button {
        margin-top: -4vh;
    }
`