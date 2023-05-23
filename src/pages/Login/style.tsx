import styled from "styled-components"


export const LoginSection = styled.section `
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

        p {
            color: red;
            font-size: .875rem;
            font-weight: 400;
        }

        div {
            display: flex;
            flex-direction: column;

            p {
                color: red;
                font-size: .875rem;
                font-weight: 400;
            }
        }
    }

    span {
        display: flex;
        gap: .5rem;

        p {
            color: white;
        }

        a {
            color: white;
            text-decoration: none;
            :hover {
                color: var(--dark-orange);
            }
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
    
    input {
        width: 28.75rem;

        @media screen and (max-width: 1000px) {
            width: 23.75rem;
        }
        @media screen and (max-width: 600px) {
            width: 18.75rem;
        }
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