var listanumeros = []
var res = document.getElementById('parag')

function inserir() {
    var num = Number(document.getElementById('txtnum').value)
    var select = document.getElementById('sel')
    var item = document.createElement('option')
    

    item.text = num
    item.value = num
   
   
    if (num > 0 && !listanumeros.includes(num)) {
      select.appendChild(item)
      listanumeros.push(Number(num))
    }

    res.innerHTML = `Ao todo temos ${listanumeros.length} cadastrados<br>` 

}

function finalizar(){
    listanumeros.sort((a,b) => a - b)
    const maiornum = listanumeros[listanumeros.length-1]
    const menornum = listanumeros[0]
    
    const somanun = listanumeros.reduce((acc, currentValue) => acc + currentValue,  0);
    
    res.innerHTML = `Ao todo temos ${listanumeros.length} cadastrados<br>`
    res.innerHTML = res.innerHTML + `O maior numero da lista é ${maiornum}<br>`
    res.innerHTML = res.innerHTML + `O menor numero da lista é ${menornum}<br>`
    res.innerHTML = res.innerHTML + `Somando todos os numeros temos ${somanun}<br>`
    res.innerHTML = res.innerHTML + `A média dos valores é ${somanun/listanumeros.length}<br>`
}



