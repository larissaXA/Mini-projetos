var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var steps = document.getElementById('steps')
var count = document.getElementById('count')
var display = document.getElementById('display')

count.addEventListener('click',counting)
function counting(){
    if(num1 == '' || num2 == "" || steps == '' || Number(steps.value) == 0){
        return alert('Você esqueceu de colocar um número.Por favor,preencha os espaços novamente!')
    }else if(Number(num1.value) > Number(num2.value)){
        return alert('O início é maior que o fim.Digite um novo valor!')
    }else{
        var sum = Number(num1.value)
        display.innerHTML = sum
        while(sum < Number(num2.value)){
            sum += Number(steps.value)
            if(sum <= Number(num2.value)){
                display.innerHTML += ' -> ' + sum
            } 
        }
    }
}