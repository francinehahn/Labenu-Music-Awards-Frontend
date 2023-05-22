import styled from "styled-components"


export const SignupSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin: 5rem 2rem;

    h3 {
        color: white;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: .7rem;
        
        div {
            display: flex;
            flex-direction: column;

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

        button {
            margin-top: 1rem;
        }
    }
`

export const PasswordInput = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;
    width: 30rem;

    @media screen and (max-width: 1000px) {
        width: 25rem;
    }
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
    
    svg {
        color: #515151;
        background-color: white;
        height: 1.25rem;
        width: 1.25rem;
        margin: .5rem;

        :hover {
            opacity: .7;
            cursor: pointer;
        }
    }
`

export const SuccessMessage = styled.p `
    color: green;
    font-size: 1rem;
`

export const AxiosError = styled.p `
    color: red;
    font-size: 1rem;
    width: 30rem;

    @media screen and (max-width: 1000px) {
        width: 25rem;
    }
    @media screen and (max-width: 600px) {
        width: 20rem;
    }
`