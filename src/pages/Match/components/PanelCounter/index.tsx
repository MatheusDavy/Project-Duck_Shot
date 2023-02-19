import { CounterPanel } from "./styles"
import gsap from "gsap"
import { DOMElement, useContext, useEffect, useState } from "react"
import { MatchDataContext } from "../../../../context/match_datas"

export function PanelCounter(){

    const {setMatchInit} = useContext(MatchDataContext)
  
    function handleRemoveInitCounter(){
        gsap.to('#panel-counter', {
            opacity: 0,
            duration: 0.5,
            onComplete: ()=>{
                gsap.to('#panel-counter', {
                    delay: 0.2,
                    display: 'none'
                })
            }
        })

        setMatchInit()
    }

    function handleInitCounter(){
        gsap.to("#button-animation", {
            display: 'none'
        })
        
        const counter = document.getElementById('counter-start-match')
        let initCounter: number = 5
        let initCounterInterval = setInterval(()=>{
            if(initCounter > 0){
                counter.innerHTML = initCounter - 1
            initCounter -= 1
            } else{
                handleRemoveInitCounter()
                clearInterval(initCounterInterval)
            }
        }, 1000)
    }

    return(
        <CounterPanel id="panel-counter">

        <div id="counter-start-match">
            5
        </div>

        <button onClick={handleInitCounter} id='button-animation'>
            START
        </button>

    </CounterPanel>
    )
}