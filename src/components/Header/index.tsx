import { CanvasBackground } from "../BackgroundAnimation";
import { ContainerMatch, ContainerPerfil, ContainerVersus, CounterPointers, HeaderContainer, HeaderContainerContent, ScoreContainer } from "./styles";

import gunImage from '../../assets/shotgun-perfil.webp'
import duckImage from '../../assets/duck-game.png'
import versusImage from '../../assets/versus.svg'
import { useContext } from "react";
import { MatchDataContext } from "../../context/match_datas";
import { SetMode } from "../SetMode";
import { Link } from "react-router-dom";

export function Header() {

    const {matches} = useContext(MatchDataContext)

    return (

        <HeaderContainer>
            <HeaderContainerContent>

                <SetMode />

                <ScoreContainer>

                    <Link to={'/history'}>History</Link>

                </ScoreContainer>

                <ContainerVersus>

                    <ContainerPerfil side='end'>
                        <div className="image">
                            <img src={duckImage} alt="" />
                        </div>

                        <p>DUCK</p>
                    </ContainerPerfil>

                    

                    <ContainerMatch>
                        <p>MATCH {matches}</p>
                        <img src={versusImage} alt="" className="versus"/>
                    </ContainerMatch>

                    <ContainerPerfil side='start'>
                        <div className="image">
                            <img src={gunImage} alt="" />
                        </div>

                        <p>SHOTGUN</p>
                    </ContainerPerfil>

                </ContainerVersus>

                <CanvasBackground zIndex={0}/>

            </HeaderContainerContent>
        </HeaderContainer>

    )
}