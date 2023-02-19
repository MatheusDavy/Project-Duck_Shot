import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MatchDataContext } from "../../../../context/match_datas";
import { PanelFinishedContainer } from "./styles";


export function PanelFinishedGame(){
    const {pointers, setDatas} = useContext(MatchDataContext)
    const navigate = useNavigate()

    function handleResetDatas(){
        setDatas()
        setTimeout(()=>{
            window.location.href = '/'
        }, 2000)
    }

    return(
        <PanelFinishedContainer id="panel-finished-animation">

            <div>
                {pointers}
            </div>
            
            <span>Your Score</span>

            <button onClick={handleResetDatas}>Home</button>

        </PanelFinishedContainer>
    )
}