import styled from "styled-components"


export const PhotoSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 0 4vw 5vh 4vw;
    min-height: 68vh;

    @media screen and (max-width: 800px) {
        align-items: center;    
    }

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
        
        @media screen and (max-width: 800px) {
            justify-content: center;
            gap: 2vw; 
        }

        img {
            width: 300px;
            height: 200px;
            :hover {
                cursor: pointer;
                opacity: .7;
            }
        }
    }
`