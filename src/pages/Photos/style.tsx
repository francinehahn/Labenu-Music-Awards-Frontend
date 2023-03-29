import styled from "styled-components"


export const PhotoSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 5vh 4vw 0 4vw;
    min-height: 68vh;

    @media screen and (max-width: 800px) {
        align-items: center;    
    }

    span {
        margin-top: 32vh;
    }

    button {
        @media screen and (min-width: 1200px) {
            margin-left: 88vw;
            padding: 1.5vh 1vw 1vh 1vw;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            margin-left: 87vw;
            padding: 1.5vh 1.2vw 1vh 1.2vw;
        }
        @media screen and (min-width: 750px) and (max-width: 1000px) {
            margin-left: 85vw;
            padding: 1.5vh 1.5vw 1vh 1.5vw;
        }
        @media screen and (min-width: 500px) and (max-width: 750px) {
            margin-left: 83vw;
            padding: 1.5vh 2.2vw 1vh 2.2vw;
        }
        @media screen and (max-width: 500px) {
            margin-left: 79vw;
            padding: 1.3vh 2.7vw .8vh 2.7vw;
        }

        svg {
            background-color: transparent;
            @media screen and (min-width: 1000px) {
                height: 28px;
                width: 28px;
            }
            @media screen and (max-width: 1000px) {
                height: 25px;
                width: 25px;
            }
        }
    }

    p {
        font-size: 16px;
        color: white;
    }

    h3 {
        color: white;
        line-height: 9vh;
    }

    div {
        display: flex;
        gap: 1vw;
        flex-wrap: wrap;
        margin-bottom: 6vh;
        
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