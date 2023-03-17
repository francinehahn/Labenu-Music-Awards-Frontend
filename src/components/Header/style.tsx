import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    height: 10vh;
    border-bottom: 1px solid white;

    img {
        width: 10%;
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
    }
`