var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var sum = document.getElementById('sum').addEventListener('click',sum)
var sub = document.getElementById('sub').addEventListener('click',sub)
var mult = document.getElementById('mult').addEventListener('click',mult)
var div = document.getElementById('div').addEventListener('click',div)
var res = document.getElementById('result')

function sum(){
    if(Number(num1.value) == '' || Number(num2.value) == ''){
        return alert("You didn't insert anything.Please, enter a number")
    }
    res.innerHTML = Number(num1.value) + Number(num2.value)
}
function sub(){
    if(Number(num1.value) == '' || Number(num2.value) == ''){
        return alert("You didn't insert anything.Please, enter a number")
    }
    res.innerHTML = Number(num1.value) - Number(num2.value)
}
function mult(){
    if(Number(num1.value) == '' || Number(num2.value) == ''){
        return alert("You didn't insert anything.Please, enter a number")
    }
    res.innerHTML = Number(num1.value) * Number(num2.value)
}
function div(){
    if(Number(num1.value) == '' || Number(num2.value) == ''){
        return alert("You didn't insert anything.Please, enter a number")
    }
    res.innerHTML = Number(num1.value) / Number(num2.value)
}
