import styled from "styled-components";


export const PanelFinishedContainer = styled.div`
    
    width: 500px;
    max-height: 80vh;
    height: 600px;

    border-radius: 20px;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(15px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    opacity: 0;
    

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 300%);

    div{
        border-radius: 50%;
        height: 100px;
        width: 100px;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        font-weight: bold;
        color: white;

        border: 10px solid #FF4848;
    }

    span{
        font-size: 1.75rem;
        font-weight: bold;
        color: white;

        margin-top: 20px;
    }

    button{
        text-decoration: none;

        padding: 20px 40px;
        font-size: 1.75rem;
        font-weight: bold;
        color: white;
        background-color: gray;
        transition: 0.4s;
        border-radius: 9px;
        border: 0;
        margin-top: 80px;
        cursor: pointer;position: relative;

        &:hover{
            background-color: #FF4848;
        }

    }
`