import styled from "styled-components"

export const ProfileSection = styled.section `
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    margin: 2vh 0 7vh 0;

    h3 {
        color: white;
        text-align: center;
        margin-top: 1vh;
    }

    #userInfo {
        margin-left: 75vw;
        background-color: white;
        padding: 1vh 1vw;
        border-radius: 50px;
        color: black;
        font-size: 14px;
    }

    .registrationTitle {
        margin-top: 8vh;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2vh;

        div {
            display: flex;
            flex-direction: column;
        }
    }
`