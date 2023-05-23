import styled from "styled-components"


export const HomeSection = styled.div `
    background-color: black;
    min-height: 100vh;

    img {
        width: 100%;
    }

    section {
        display: flex;
        justify-content: center;
        gap: 10rem;
        flex-wrap: wrap;
        margin: 3rem 4rem;

        @media screen and (max-width: 1350px) {
            gap: 7rem;
        }
        @media screen and (max-width: 1280px) {
            gap: 4rem;
        }
        @media screen and (max-width: 680px) {
            flex-direction: column;
            gap: 2rem;
            margin: 3rem 5rem;
        }
        @media screen and (max-width: 480px) {
            flex-direction: column;
            gap: 2rem;
            margin: 3rem 2rem;
        }
    }

    button {
        margin: 1rem auto 3rem auto;
    }
`

export const ImgDesktop = styled.img `
    @media screen and (min-width: 800px) {
        display: block;
    }
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const ImgMobile = styled.img `
    @media screen and (min-width: 800px) {
        display: none;
    }
    @media screen and (max-width: 800px) {
        display: block;
    }
`

export const DivHome = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        color: white;
    }

    h3 {
        color: var(--dark-orange);
    }

    div {
        margin-bottom: 1rem;
        gap: 1rem;
    }
`