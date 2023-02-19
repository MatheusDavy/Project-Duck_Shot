import styled from "styled-components";

export const PointersContainer = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(15px);

    color: white;
    font-size: 1.25rem;
    font-weight: bold;

    position: fixed;
    top : 50px;
    left: 50px;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
`