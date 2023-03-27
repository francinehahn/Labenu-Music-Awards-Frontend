import styled from "styled-components"


export const PhotoSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 0 4vw 5vh 4vw;
    min-height: 68vh;

    span {
        margin-top: 32vh;
    }

    button {
        margin-left: 78vw;
        margin-top: 5vh;
    }

    p {
        font-size: 16px;
        color: white;
    }

    h2 {
        font-size: 24px;
        color: white;
        margin: 5vh 0 1vh 0;
    }

    div {
        display: flex;
        gap: 1vw;
        flex-wrap: wrap;
        margin-bottom: 3vh;
        
        img {
            width: 20vw;
            height: 27vh;
            :hover {
                cursor: pointer;
                opacity: .7;
            }
        }
    }
`