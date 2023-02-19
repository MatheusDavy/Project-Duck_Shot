import { BackgroundContainer } from "./styles";
import granuladoImage from '../../assets/background-granulado.webp'
import './main.js'

interface CanvasBackgroundProps {
    zIndex: number
}

export function CanvasBackground({zIndex}: CanvasBackgroundProps){

    return(
        <BackgroundContainer zIndex={zIndex}>
            <span className="balls"></span>
            <span className="balls"></span>
            <span className="balls"></span>
            <span className="balls"></span>
            <span className="balls"></span>

            <img src={granuladoImage} alt="" className="granulado-image"/>
        </BackgroundContainer>
    )
}