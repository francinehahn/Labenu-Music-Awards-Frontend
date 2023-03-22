import styled from "styled-components"

export const CartSection = styled.section `
    margin-top: 6vh;
    @media screen and (min-width: 1000px) {
        min-height: 59vh;
    }
    @media screen and (min-width: 770px) and (max-width: 1000px) {
        min-height: 65vh;
    }
    @media screen and (min-width: 600px) and (max-width: 770px) {
        min-height: 62vh;
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        min-height: 58vh;
    }
    @media screen and (max-width: 500px) {
        min-height: 60vh;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: .8vw;
        @media screen and (min-width: 1300px) {
            padding: 32vh 0 35vh 0;
        }
        @media screen and (min-width: 1100px) and (max-width: 1300px) {
            padding: 32vh 0 37vh 0;
        }
        @media screen and (min-width: 900px) and (max-width: 1100px) {
            padding: 32vh 0 34vh 0;
        }
        @media screen and (min-width: 770px) and (max-width: 900px) {
            padding: 35vh 0 40vh 0;
        }
        @media screen and (min-width: 600px) and (max-width: 770px) {
            padding: 33vh 0 38vh 0;
        }
        @media screen and (min-width: 500px) and (max-width: 600px) {
            padding: 33vh 0;
        }
        @media screen and (max-width: 500px) {
            padding: 35vh 0;
        }
        p {
            font-size: 20px;
        }
        svg {
            height: 40px;
            width: 40px;
        }
    }
    
    p {
        text-align: center;
    }

    #totalPrice {
        color: red;
        font-size: 18px;
        font-weight: 500;
    }
`