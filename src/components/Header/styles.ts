import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
`;

export const HeaderContainerContent = styled.div`
  width: 90%;
  height: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CounterPointers = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.25rem;
  font-weight: 600;
`;

export const ScoreContainer = styled.div`
  width: 300px;
  height: auto;
  padding: 15px 0px;

  background-color: black;

  border-radius: 0px 0px 20px 20px;

  box-shadow: 0px 10px 20px #282828;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 1;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-weight: bold;

  a{
    color: white;
    text-decoration: none;
    font-size: 0.75rem;
  }

`;

export const ContainerVersus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  max-width: 642px;

  align-self: center;
  justify-self: center;

  position: relative;
  z-index: 2;
  margin: 0 auto;
  transform: translateX(7%) translateY(35px);
`;

interface ContainerPerfilProps {
  side: "start" | "end";
}

export const ContainerPerfil = styled.div<ContainerPerfilProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  align-items: ${(props) =>
    props.side === "start" ? "flex-start" : "flex-end"};

  .image {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    background-color: white;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    font-size: 42px;
    font-weight: bold;
    text-transform: uppercase;
    color: white;
  }
`;

export const ContainerMatch = styled.div`
      align-self: flex-end;

    display: flex;
    flex-direction: column;
  align-items: center;
    gap: 30px;

    p{
        font-size: 14px;
        padding: 10px 20px;
        background-color: white;
        border-radius: 8px;
        font-weight: bold;
        color: black;
    }

  img.versus {
    width: 65px;
    height: auto;
  }
`;
