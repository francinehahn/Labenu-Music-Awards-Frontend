import styled from "styled-components"


export const PhotoSection = styled.section `
    display: flex;
    flex-direction: column;
    margin: 2rem 4rem 0 4rem;
    min-height: 75vh;

    @media screen and (max-width: 800px) {
        align-items: center;    
    }

    span {
        margin-top: 32vh;
    }

    button {
        margin-left: 88vw;
        padding: .5rem .8rem;

        @media screen and (min-width: 900px) and (max-width: 1200px) {
            margin-left: 83vw;
        }
        @media screen and (min-width: 500px) and (max-width: 900px) {
            margin-left: 75vw;
        }
        @media screen and (max-width: 500px) {
            margin-left: 70vw;
        }
        @media screen and (max-width: 400px) {
            margin-left: 65vw;
        }

        svg {
            background-color: transparent;
            @media screen and (min-width: 1000px) {
                height: 1.75rem;
                width: 1.75rem;
            }
            @media screen and (max-width: 1000px) {
                height: 1.56rem;
                width: 1.56rem;
            }
        }
    }

    p {
        font-size: 1rem;
        color: white;
    }

    h3 {
        color: white;
        line-height: 3.5rem;
    }

    div {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 6vh;
        
        @media screen and (max-width: 800px) {
            justify-content: center;
        }

        img {
            width: 18.75rem;
            height: 12.5rem;
            :hover {
                cursor: pointer;
                opacity: .7;
            }
        }
    }
`