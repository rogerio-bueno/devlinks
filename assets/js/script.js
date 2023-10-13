function toogleMode() {

    const body = document.body
    // adiciona e retira a class light da tag body
    body.classList.toggle('light')

    //alteria a imagem e o alt
    const img = document.querySelector(".header__image")
    if (body.classList.contains('light')){
        img.setAttribute('src','./assets/image/avatar-light.png')
    } else {
        img.setAttribute('src','./assets/image/avatar.png')
    }

    const alt = document.querySelector(".header__image")
    if (body.classList.contains('light')){
        alt.setAttribute('alt', 'Foto de Rogério Bueno, vestindo camisa azul, posicionado de lado em um fundo amarelo')
    } else {
        alt.setAttribute('alt', 'Foto de Rogério Bueno, vestindo camisa azul, posicionado de lado')
    }
}