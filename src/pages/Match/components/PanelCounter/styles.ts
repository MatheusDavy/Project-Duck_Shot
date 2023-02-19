import styled from "styled-components";

export const CounterPanel = styled.div`

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 300px;
    height: auto;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(15px);
    flex-direction: column;

    div{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 20px solid #6248FF;

        display: flex;
        align-items: center;
        justify-content: center;


        font-size: 45px;
        font-weight: bold;
        color: white;
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