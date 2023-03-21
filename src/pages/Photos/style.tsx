import styled from "styled-components"


export const PhotoSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 0 4vw 5vh 4vw;
    min-height: 68vh;

    h2 {
        font-size: 24px;
        color: white;
        margin: 5vh 0 1vh 0;
    }

    p {
        font-size: 16px;
        color: white;
    }

    div {
        display: flex;
        gap: 1vw;
        flex-wrap: wrap;

        img {
            width: 20vw;
            height: 27vh;
        }
    }
`