import styled from "styled-components"

export const ProfileSection = styled.section `
    min-height: 75vh;
    margin: 2vh 0 7vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    #loadingDiv {
        margin-top: 30vh;
    }

    #purchases {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vh;
        
        h3 {
            color: white;
            text-align: center;
            @media screen and (min-width: 1200px) {
                padding: 3vh 0;    
            }
            @media screen and (min-width: 800px) and (max-width: 1200px) {
                padding: 4vh 0 2vh 0;    
            }
            @media screen and (max-width: 800px) {
                padding: 6vh 0 1vh 0;    
            }
        }
    }

    #userInfo {
        width: 99vw;
        display: flex;
        justify-content: flex-end;
        padding: 0 5vw;
        p {
            color: black;
            font-size: 14px;
            background-color: white;
            border-radius: 50px;
            
            @media screen and (min-width: 1300px) {
                padding: 1vh 1vw;
            }
            @media screen and (min-width: 800px) and (max-width: 1300px) {
                padding: 1vh 1.5vw;
            }
            @media screen and (max-width: 800px) {
                padding: 1vh 2vw;
            }
        }
        
    }

    .registrationTitle {
        margin: 10vh 0 4vh 0;
        color: white;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2vh;

        div {
            display: flex;
            flex-direction: column;
        }
    }
`