import styled from "styled-components"

export const HeaderSection = styled.header `
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    min-height: 8vh;
    border-bottom: 1px solid var(--light-grey);
    position: sticky;
    top: 0;
    left: 0;

    @media screen and (max-width: 1000px) {
        padding: 0 2rem;
    }

    img {
        width: 7rem;

        @media screen and (max-width: 1000px) {
            width: 6rem;
        }
    }
` 

export const HeaderDesktop = styled.div `
    @media screen and (max-width: 980px) {
        display: none;
    }

    nav {
        display: flex;
        gap: 2rem;

        a {
            text-decoration: none;
            font-size: 1rem;
            color: white;
            :hover {
                color: var(--light-orange);
            }
        }

        span {
            display: flex;
            p {
                font-size: .7rem;
                background-color: white;
                padding: 0 5px;
                margin: -.5rem 0 1rem 0;
                border-radius: 50%;
            }
            svg {
                color: white;
                height: 1.2rem;
                width: 1.2rem;
            }
        }
    }
`

export const MobileSymbol = styled.div `
    @media screen and (min-width: 980px) {
        display: none;
    }

    div {
        background-color: white;
        height: 6px;
        width: 2.5rem;
        margin: .5vh 0;
        border-radius: 2px;
    }
`

export const HeaderMobile = styled.header `
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    button {
        margin: 1rem 0 1rem 87vw;
        padding: .35rem .95rem;
        border-radius: 4px;
        font-size: 1.125rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;

        a {
            text-decoration: none;
            font-size: 1.125rem;
            color: white;
        }

        span {
            display: flex;
            gap: .2rem;

            p {
                font-size: .875rem;
                background-color: white;
                padding: 2px 8px;
                margin: -.625rem 0 1rem 0;
                border-radius: 50%;
            }
            svg {
                color: white;
                height: 1.375rem;
                width: 1.375rem;
            }
        }
    }
`