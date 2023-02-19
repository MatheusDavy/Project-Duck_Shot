import { Link } from "react-router-dom";
import { HeaderHistory, HistoryContainer, InputSearch } from "./styles";

import {IoIosArrowBack} from 'react-icons/io'
import { CanvasBackground } from "../../components/BackgroundAnimation";
import { useContext, useEffect, useState } from "react";
import { HistoryTable } from "./components/HistoryTable";
import { MatchDataContext } from "../../context/match_datas";

export function History(){

    const {history} = useContext(MatchDataContext)
    const [filterHistory, setFilterHistory] = useState(history)

    useEffect(()=>{
        setFilterHistory(JSON.parse(localStorage.getItem('@history')))
    }, [])

    return(
        <HistoryContainer>
            <HeaderHistory>
                <Link to={'/'}>
                    <IoIosArrowBack size={30} />
                </Link>

            </HeaderHistory>

            <HistoryTable historyDatas={filterHistory}/>

            <CanvasBackground zIndex={-2}/>
        </HistoryContainer>
    )
}