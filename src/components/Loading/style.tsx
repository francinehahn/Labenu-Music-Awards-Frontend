import styled from "styled-components"


export const LoadingSection = styled.div `
    height: 1.56rem;
    width: 1.56rem;
    border-radius: 50%;
    border: 4px solid white;
    border-bottom: 4px solid ${props => props.color === "black"? "#000000" : "#F47C00"};
    background-color: transparent;
    display: block;
    margin: 0 auto;
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`