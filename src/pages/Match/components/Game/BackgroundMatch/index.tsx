import { BackgroundMatch } from "./styles"
import bgImage from '../../../../../assets/background-match.jpg'

export function Background() {
    return (
        <BackgroundMatch>
            <img src={bgImage} alt="" />
        </BackgroundMatch>
    )
}