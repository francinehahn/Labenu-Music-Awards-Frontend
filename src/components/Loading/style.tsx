import styled from "styled-components"


export const LoadingSection = styled.div `
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 5px solid white;
    border-bottom: 5px solid ${props => props.color === "black"? "#000000" : "#F47C00"};
    background-color: transparent;
    display: block;
    margin: 0 auto;
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`