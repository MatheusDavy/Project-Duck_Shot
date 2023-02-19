import styled from "styled-components";

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(000, 000, 000, 0.4);
  }
`;

export const HeaderHistory = styled.header`
  margin: 0 auto;

  display: flex;
  width: 90%;
  max-width: 1180px;
  padding: 10px 0px;
  justify-content: space-between;

  a {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background: rgba(000, 000, 000, 0.4);
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
  }
`;


export const InputSearch = styled.input`
    width: 70%;
    height: 40px;
    border-radius: 6px;
    background: rgba(000, 000, 000, 0.4);
    border: 0;
    color: white;
    padding: 0px 15px;

    &::placeholder{
        color: white;
    }

`
