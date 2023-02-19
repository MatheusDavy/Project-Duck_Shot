import { useContext } from "react";
import { MatchDataContext } from "../../../../../context/match_datas";
import { PointersContainer } from "./styles";

export function Pointers(){

    const {pointers} = useContext(MatchDataContext)
    return(
        <PointersContainer>
            {pointers}
        </PointersContainer>
    )
}