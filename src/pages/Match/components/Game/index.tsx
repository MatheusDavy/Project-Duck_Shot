import { Background } from "./BackgroundMatch";
import DuckMove from "./Duck";
import { Pointers } from "./Pointers";
import { ShootGun } from "./ShootGun";
import { GameContainer } from "./styles";
import { Timer } from "./Timer";

export function Game(){
    return(
        <GameContainer id="game-container-animation">
            <Background />
            <DuckMove />
            <ShootGun />
            <Timer />
            <Pointers />
        </GameContainer>
    )
}