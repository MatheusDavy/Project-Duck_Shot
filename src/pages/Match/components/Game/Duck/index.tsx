import { random } from "gsap";
import { memo, useContext } from "react";
import { MatchDataContext } from "../../../../../context/match_datas";
import { DuckButton } from "./styles";

import duckImage from '../../../../../assets/duck-game.png'
import shotSong from '../../../../../assets/shot.mp3'

function DuckMove() {
    const { setAmountPointers } = useContext(MatchDataContext)

    function handleSongShot(){
        const shot = document.getElementById('shot-song')
        shot.pause();
        shot.currentTime = 0;
        shot.play();
    }

    function handleSetSuckPosition(){
        const duck = document.getElementById('duck-animation-move')
        const xPosition = Math.floor(Math.random() * 80)
        const yPosition = Math.floor(Math.random() * (67 - 15) + 15)
        console.log(yPosition)
        duck!.style.top = `${yPosition}vh`
        duck!.style.left = `${xPosition}vw`
    }

    function handleAddPointer() {
        handleSongShot()
        handleSetSuckPosition()
        setAmountPointers()
        
    }

    return (
        <DuckButton id="duck-animation-move" onClick={handleAddPointer}>
            <img src={duckImage} alt="" />
            <audio id="shot-song">
                <source src={shotSong} />
            </audio>
        </DuckButton>
    )
}

export default memo(DuckMove)