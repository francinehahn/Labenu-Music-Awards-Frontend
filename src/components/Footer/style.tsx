import styled from "styled-components";


export const FooterSection = styled.footer `
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3vh;
    border-top: 1px solid var(--light-grey);

    p {
        color: white;
        font-size: 14px;
    }
`