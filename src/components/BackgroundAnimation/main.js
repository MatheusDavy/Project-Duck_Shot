function ballsProperties(){
    const balls = document.querySelectorAll('.balls')
    balls.forEach((ball, indice) => {
        const top = Math.random() * 30
        const left = Math.random() * 80
        const width_height = Math.random() * 70
        const colors = ['#fff', '#FF7448', '#FF4848', '#6248FF', '#485BFF']

        ball.style.animationDelay = `${indice}s`
        ball.style.width = `${width_height}vh`
        ball.style.height = `${width_height + 2}vh`
        ball.style.top = `${top}%`
        ball.style.left = `${left}%`
        ball.style.backgroundColor = colors[indice]
    })
}

window.addEventListener("load", ballsProperties)