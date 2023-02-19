import gsap from "gsap";
import moment from "moment";
import { createContext, ReactNode, useEffect, useState } from "react";
import nextId from "react-id-generator";

interface MatchDataProviderProps {
    children: ReactNode
}

interface MatchDataContextProps {
    matches: number;
    pointers: number;
    timer: number;
    history: HistoryProps[]
   


    setAmountPointers: () => void
    setModeDifficult: (value: number, difficult: string) => void
    setMatchInit: ()=> void
    setDatas: ()=> void
}

interface HistoryProps {
    id: string
    pointers: number
    mode: string
    data: string
}[]


export const MatchDataContext = createContext({} as MatchDataContextProps)

export function MatchDataProvider({ children }: MatchDataProviderProps) {

    const [matches, setMatches] = useState(0)
    const [pointers, setPointers] = useState(0)

    const [mode, setMode] = useState({ timer: 10, difficult: 'Medium' })   // Default Value

    const [timer, setTimer] = useState(0)
    const [history, setHistory] = useState<HistoryProps[]>([])

    // Get History on LocalStorage
    useEffect(() => {
        if (localStorage.getItem('@history') !== null) {
            setHistory(JSON.parse(localStorage.getItem('@history')))
        }
    }, [])

    // Get Matches on LocalStorage
    useEffect(() => {
        if (localStorage.getItem('@matches') !== null) {
            setMatches(Number(localStorage.getItem('@matches')))
        }
    }, [])

    // Get Mode on LocalStorage
    useEffect(() => {
        if (localStorage.getItem('@mode') != null) {
            setMode(JSON.parse(localStorage.getItem('@mode')))
        }
    }, [])

    // Set Timer on State
    useEffect(() => {
        setTimer(mode.timer)
    }, [mode])


    function setModeDifficult(value: number, mode: string) {
        const newData = {
            timer: value,
            difficult: mode,
        }
        localStorage.setItem('@mode', JSON.stringify(newData))
    }
    function setAmountPointers() {
        setPointers(state => state + 1)
    }
    function setHistoryDatas() {
        const newData = {
            id: nextId(),
            pointers: pointers,
            mode: mode.difficult,
            data: moment().format('DD/MM/YYYY'),
        }
        localStorage.setItem('@history', JSON.stringify([newData, ...history]))
    }
    function setAmountMatches() {
        localStorage.setItem('@matches', String(matches + 1))
    }
    function setFinishMatch() {
        const duck = document.getElementById('duck-animation-move')
        duck!.style.display = 'none'

        const containerMatch = document.getElementById('game-container-animation')
        gsap.to(containerMatch, {
            opacity: 0,
            duration: 1,
            delay: 2,
            onComplete: () => {
                gsap.to(containerMatch, {
                    display: 'none',
                    delay: 1
                })
            }
        })

        const panelDataMatch = document.getElementById('panel-finished-animation')
        gsap.to(panelDataMatch, {
            opacity: 1,
            y: "-50%",
            duration: 2,
            delay: 3,
        })
    }
    function setTimerCounter(){
        let currentTimer = timer
        const interval = 
            setInterval(() => {

                if(currentTimer > 0){
                    setTimer(currentTimer)
                }else{
                    setFinishMatch()
                    clearInterval(interval)
                }
                currentTimer -= 1;
        }, 1000)
    }
    function setMatchInit() {
        const duck = document.getElementById('duck-animation-move')
        duck!.style.display = 'flex'
        const xPosition = Math.floor(Math.random() * 80)
        const yPosition = Math.floor(Math.random() * (80 - 20) + 20)
        duck!.style.top = `${xPosition}vh`
        duck!.style.left = `${yPosition}vw`

        setTimerCounter()
    }
    function setDatas(){
        setAmountMatches()
        setHistoryDatas()
    }
    return (
        <MatchDataContext.Provider
            value={{
               
                matches,
                pointers,
                timer,
                history,
                setAmountPointers,
                setMatchInit,
                setModeDifficult,
                setDatas
            }}
        >
            {children}
        </MatchDataContext.Provider>
    )
}  