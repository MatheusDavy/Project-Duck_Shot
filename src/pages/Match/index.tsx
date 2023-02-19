import { Loading } from "../../components/Loading";
import { MatchContainer } from "./styles";

import gsap from "gsap";

import { PanelCounter } from "./components/PanelCounter";
import { Game } from "./components/Game";
import { PanelFinishedGame } from "./components/PanelFinishedGame";



export function Match(){
    return(
        <MatchContainer>
            <Game />

            <PanelCounter />

            <PanelFinishedGame />

        </MatchContainer>
    )
}