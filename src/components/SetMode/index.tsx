import { DOMElement, useContext, useEffect, useState } from "react";
import { MatchDataContext } from "../../context/match_datas";
import { ButtonMode, ModalContainer, SetModeContainer } from "./styles";

export function SetMode() {

    const { setModeDifficult } = useContext(MatchDataContext)

    const [isActiveModal, setActiveModal] = useState(false)
    const [modes, setMode] = useState([
        {
            mode: 'Easy',
            isActive: false,
            value: 15,
        },
        {
            mode: 'Medium',
            isActive: true,
            value: 10,
        },
        {
            mode: 'Hard',
            isActive: false,
            value: 5,
        }
    ])
    function handleActiveModal() {
        setActiveModal(!isActiveModal)
    }

    function handleChangeMode(element: any) {
        const id = element.target.dataset.mode
        const newArrayMode = modes.map((mode) => {
            if (mode.mode === id) {
                setModeDifficult(mode.value, mode.mode)
                return { ...mode, isActive: true }
            } else {
                return { ...mode, isActive: false }
            }
        })

        setMode(newArrayMode)
    }

    useEffect(() => {
        if (localStorage.getItem('@mode') !== null) {
        
        const local = JSON.parse(localStorage.getItem('@mode'))
        const id = local.difficult
        const newArrayMode = modes.map((mode) => {
            if (mode.mode === id) {
                setModeDifficult(mode.value, mode.mode)
                return { ...mode, isActive: true }
            } else {
                return { ...mode, isActive: false }
            }
        })

        setMode(newArrayMode)
    }
    }, [])


return (
    <SetModeContainer onClick={handleActiveModal}>

        <>
            {modes.map((mode) => {
                if (mode.isActive == true) {
                    return (
                        <ButtonMode key={mode.mode}>
                            {mode.mode}
                        </ButtonMode>
                    )
                }
            })}
        </>

        <ModalContainer isActive={isActiveModal}>

            <>
                {modes.map((mode) => {
                    if (mode.isActive == false) {
                        return (
                            <ButtonMode data-mode={mode.mode} key={mode.mode} onClick={(e) => { handleChangeMode(e) }}>
                                {mode.mode}
                            </ButtonMode>
                        )
                    }
                })}
            </>

        </ModalContainer>


    </SetModeContainer>
)
}