function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'white'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'black'
    }
}