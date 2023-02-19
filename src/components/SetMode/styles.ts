import { ReactNode } from "react";
import styled from "styled-components";

interface SetModeContainerProps {
    children: ReactNode
}
export const SetModeContainer = styled.div<SetModeContainerProps>`
    display: flex;
    position: absolute;
    top: 10px;
    right: 40px;
    z-index: 10;

    padding: 10px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    cursor: pointer;
`

interface SetModalProps {
    isActive: boolean
    children: ReactNode
}
export const ModalContainer = styled.div<SetModalProps>`
    display: flex;
    flex-direction: column;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: ${props => props.isActive ? 'translateY(110%) translateX(-50%) scale(1)' : 'translateY(0%) translateX(-50%) scale(0)'};
    padding: 10px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(15px);
    gap: 20px;
    border-radius: 10px;
    transition: 0.4s;
    opacity: ${props => props.isActive ? '1' : '0'};;
    

`

export const ButtonMode = styled.button`

    background-color: white;
    border: 0;
    border-radius: 9px;
    padding: 10px 20px;
    width: 100px;
    cursor: pointer;
`