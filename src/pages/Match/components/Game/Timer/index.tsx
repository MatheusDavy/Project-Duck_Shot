import { useContext } from "react"
import { MatchDataContext } from "../../../../../context/match_datas"
import { TimerContainer } from "./styles"

export function Timer(){
    const {timer} = useContext(MatchDataContext)
    return(
        <TimerContainer>
            {timer}s
        </TimerContainer>
    )
}