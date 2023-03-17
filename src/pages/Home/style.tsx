import styled from "styled-components"


export const HomeSection = styled.section `
    background-color: black;
    min-height: 90vh;

    img {
        display: block;
        width: 100%;
    }

    #div-home {
        padding: 5vh 5vw;
        
        h2 {
            color: white;
            text-align: center;
            margin-bottom: 2vh;
            font-size: 32px;
        }

        #title-week-day {
            color: white;
            font-size: 23px;
            padding: 1vh 0;
        }

        div {
            display: flex;
            margin-bottom: 2vh;
            gap: 1vw;
        }
    }
`