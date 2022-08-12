function contar(){
    var numini = Number(document.getElementById('txt_ini').value )
    var numfim = Number(document.getElementById('txt_fim').value )
    const numpass= Number(document.getElementById('txt_passo').value )
    var res = document.getElementById('res')
    var textoexibir = ''

    if(numini == 0 || numfim == 0 || numpass == 0){
        res.innerHTML = 'Impossível contar...Preencha todos os dados'
        return
    }

    if (numini < numfim ) {
        while (numini <= numfim ) {
            textoexibir = textoexibir + '👉' + numini
            numini = numini + numpass
        }

    } else {
        while (numfim <= numini ) {
            textoexibir =  '👉' + numfim + textoexibir
            numfim = numfim + numpass
        }
    }

    
    
    res.innerHTML = textoexibir + '🏁'
    
}
