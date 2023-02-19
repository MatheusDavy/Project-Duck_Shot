import { ContainerLoading } from "./syles";
import loadingImage from '../../assets/loading.svg'
import gsap from "gsap";

export function Loading() {

    function handleRemoveLoading() {
        gsap.to("#loading-container", {
            opacity: 0,
            duration: 1,
            delay: 3,
            onComplete: () => {
                gsap.to("#loading-container", {
                    display: 'none',
                    delay: 1,
                })
            }
        })
    }

    window.addEventListener('load', handleRemoveLoading)

    return (
        <ContainerLoading id="loading-container">

            <img src={loadingImage} alt="" />

        </ContainerLoading>
    )

}