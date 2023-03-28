import styled from "styled-components"

export const HeaderSection = styled.header `
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    min-height: 8vh;
    border-bottom: 1px solid var(--light-grey);
    position: sticky;
    top: 0;
    left: 0;

    img {
        @media screen and (min-width: 1300px) {
            width: 8%;
        }
        @media screen and (min-width: 1000px) and (max-width: 1300px) {
            width: 10%;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 12%;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 15%;
        }
        @media screen and (min-width: 500px) and (max-width: 600px) {
            width: 20%;
        }
        @media screen and (max-width: 500px) {
            width: 30%;
        }
    }
` 

export const HeaderDesktop = styled.div `
    @media screen and (max-width: 980px) {
        display: none;
    }

    nav {
        display: flex;
        gap: 3vw;

        a {
            text-decoration: none;
            font-size: 16px;
            color: white;
            :hover {
                color: var(--light-orange);
            }
        }

        span {
            display: flex;
            p {
                font-size: 14px;
                background-color: white;
                padding: 0 8px;
                margin: -10px 0 15px 0;
                border-radius: 10px;
            }
            svg {
                color: white;
                height: 20px;
                width: 20px;
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
        width: 40px;
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
        margin: 2.8vh 0 4vh 83vw;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 18px;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vw;
        margin-top: 8vh;

        a {
            text-decoration: none;
            font-size: 18px;
            color: white;
        }

        span {
            display: flex;
            gap: 1vw;

            p {
                font-size: 14px;
                background-color: white;
                padding: 0 8px;
                margin: -10px 0 15px 0;
                border-radius: 10px;
            }
            svg {
                color: white;
                height: 22px;
                width: 22px;
            }
        }
    }
`