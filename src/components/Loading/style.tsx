import styled from "styled-components"


export const LoadingSection = styled.div `
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 5px solid var(--light-grey);
    border-bottom: 5px solid black;
    background-color: transparent;
    display: block;
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`