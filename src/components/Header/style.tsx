import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    height: 8vh;
    border-bottom: 1px solid var(--light-grey);
    position: sticky;
    top: 0;
    left: 0;

    img {
        width: 8%;
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