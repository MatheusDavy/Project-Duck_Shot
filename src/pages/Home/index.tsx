import { Header } from "../../components/Header";
import { BannerDuck, ContentText, HomeContainer } from "./styles";
import gsap from "gsap";

import duckImage from '../../assets/duck-banner.png'
import { Loading } from "../../components/Loading";

export function Home() {
    

    function handleRedirectToPlay(){
        gsap.to('#content-text-home', {
            display: 'none'
        })

        gsap.to("body", {
            overflow: 'hidden',
        })

        gsap.to("header", {
            position: 'absolute',
            height: '100vh',
            width: '100vw',
            duration: 2,

            onComplete: ()=>{
                gsap.to("header", {
                    scale: 12,
                    delay: 2,
                    duration: 2,
                    opacity: 0,
                    onComplete: ()=>{
                        window.location.href ='/match'
                    }
                })
            }
        })
    }

    return (
        <HomeContainer id="home-container">
        
            <Header />
            <ContentText id="content-text-home">
                <h1>Be fast and kill the duck if you can.</h1>
                <BannerDuck>
                    <div>
                        <img src={duckImage} alt="" />
                    </div>
                    <button onClick={handleRedirectToPlay}>
                        PLAY
                    </button>
                </BannerDuck>
            </ContentText>
        </HomeContainer>
    )
    
}