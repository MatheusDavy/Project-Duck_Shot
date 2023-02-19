import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;

    background: #161616;
    min-height: 100vh;
`

export const ContentText = styled.div`

    width: 95%;
    max-width: 800px;
    margin: auto auto;

    background: rgba(255, 255, 255, 0.04);
    border-radius: 30px;

    min-height: 100%;
    padding: 50px;


    display: flex;
    justify-content: space-between;
    align-items: center;


    h1{
        width: 100%;
        max-width: 464px;
        color: white;
        font-size: 62px;
        line-height:1;
        font-weight: bold;
    }

`

export const BannerDuck = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;


    div{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 25px solid #6248FF;
        background-color: white;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    button{
        width: 100%;
        max-width: 100%;
        padding: 10px;
        font-size: 22px;
        font-weight: bold;
        border-radius: 9px;
        border: 0;
        background-color: gray;
        color: #fff;
        cursor: pointer;
        transition: 0.4s;

        &:hover{
            background-color: #FF4848 ;
        }
    }

`