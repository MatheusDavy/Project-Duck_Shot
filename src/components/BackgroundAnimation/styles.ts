import styled from "styled-components";

interface BackgroundContainerProps {
    zIndex: number
}
export const BackgroundContainer = styled.div<BackgroundContainerProps>`

    width: 100%;
    height: 100%;

    position: absolute;
    inset: 0;
    z-index: ${props => props.zIndex};

    background: linear-gradient(90deg, #FF7448 0%, #FF4848 39.58%, #6248FF 75.52%, #485BFF 100%);
    
    overflow: hidden;
    span{
        filter: blur(40px);
        animation-name: ballRotating;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        position: absolute;
        border-radius: 50%;
    }

    @keyframes ballRotating {
        0%{transform: rotate(0deg) translateX(0vh)}
        35%{transform: rotate(120deg) translateX(40vh)}
        75%{transform: rotate(240deg) translateX(-40vh)}
        100%{transform: rotate(360deg) translateX(0vh)}
    }

    .granulado-image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        inset: 0;
    }

`