var num = document.getElementById('num')
var calc = document.getElementById('calc')
var multTable = document.getElementById('multTable')

calc.addEventListener('click',calculator)

function calculator(){
    if(Number(num.value) == ''){
        alert('Você inseriu nada.Por favor,selecione um número')
    }else{
        multTable.innerHTML = ""
        for(let i = 1;i <= 10;i++){
            let op = document.createElement('option')
            let mult = Number(num.value) * i
            op.text = `${Number(num.value)} * ${i} = ` + mult
            multTable.appendChild(op)
        }   
    }
}