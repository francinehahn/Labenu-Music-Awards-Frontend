import styled from "styled-components"

export const ProfileSection = styled.section `
    min-height: 75vh;
    margin: 1rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        gap: .7rem;

        div {
            display: flex;
            flex-direction: column;
        }
    }
`

export const Title = styled.h3 `
    margin: 5rem 0 1rem 0;
    color: white;
`

export const LoadingDiv = styled.div `
    margin-top: 30vh;
`

export const Purchases = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    
    h3 {
        color: white;
        text-align: center;
        padding: 1rem 0;
    }
`

export const UserInfo = styled.div `
    width: 95vw;
    display: flex;
    justify-content: flex-end;
    padding: 0 1rem;

    p {
        color: black;
        font-size: .875rem;
        background-color: white;
        border-radius: 5rem;
        padding: .5rem 1rem;
    }
`