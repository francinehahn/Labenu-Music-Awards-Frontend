import styled from "styled-components"


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 15vw;
    padding: 3vh;
    border: 2px solid var(--dark-grey);
    box-shadow: 3px 3px 15px var(--dark-grey);
    
    h3 {
        color: white;
        font-size: 20px;
        line-height: 5vh;
        font-weight: 600;
        text-align: center;
    }

    p {
        color: white;
        font-size: 15px;
        text-align: center;
    }
`