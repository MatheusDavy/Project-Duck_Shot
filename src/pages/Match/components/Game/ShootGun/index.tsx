import { ShootGunContainer, ShootGunImage } from "./styles";
import shotgunImage from '../../../../../assets/shotgun.png'

export function ShootGun(){

    window.addEventListener('mousemove', (mouse)=>{
        const xCoordenates = mouse.clientX
        const imageMove = document.getElementById('shotgun-animate-parallax')
        imageMove!.style.transform = `translateX(${xCoordenates}px)`
        
    })

    return(
        <ShootGunContainer id='shotgun-animate-parallax'>
            <ShootGunImage src={shotgunImage} alt="" />
        </ShootGunContainer>
    )
}