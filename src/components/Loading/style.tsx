import styled from "styled-components"


export const LoadingSection = styled.div `
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 5px solid var(--light-grey);
    border-bottom: 5px solid black;
    display: block;
    margin-bottom: 5vh;
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`