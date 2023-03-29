import styled from "styled-components"


export const SignupSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 5vw;

    h3 {
        color: white;
        margin: 5vh 0 2vh 0;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        margin-top: 2vh;
        
        div {
            display: flex;
            flex-direction: column;

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

        button {
            margin-top: 2vh;
        }
    }

    #successMessage {
        color: green;
        font-size: 16px;
    }

    #axiosError {
        color: red;
        font-size: 16px;
    }
`


export const PasswordInput = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: white;

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
    
    svg {
        color: #515151;
        background-color: white;
        height: 20px;
        width: 20px;

        @media screen and (min-width: 1100px) {
            margin: .5vh .5vw;
        }
        @media screen and (min-width: 500px) and (max-width: 1100px) {
            margin: .5vh 1vw;
        }
        @media screen and (max-width: 500px) {
            margin: .5vh 1.5vw;
        }

        :hover {
            opacity: .7;
            cursor: pointer;
        }
    }
`