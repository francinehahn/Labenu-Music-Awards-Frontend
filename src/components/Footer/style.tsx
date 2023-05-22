import styled from "styled-components";

export const FooterSection = styled.footer `
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 2rem;
    border-top: 1px solid var(--light-grey);

    p {
        color: white;
        font-size: 0.875rem;
        text-align: center;
    }
`