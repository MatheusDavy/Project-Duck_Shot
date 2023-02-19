import styled from "styled-components";

export const ContainerLoading = styled.div`

    width: 100%;
    height: 100vh;

    position: fixed;
    inset: 0;


    background: #161616;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img{
        width: 5vw;
        height: auto;
    }
    

`