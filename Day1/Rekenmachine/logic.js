var calcField;

function addCharacter(char){
    console.log(calcField.value)
    calcField.value += char
}

function calc(){
    alert(eval(calcField.value))
    calcField.value = 0
}

function removeLast() {
    calcField.value = calcField.value.slice(0,-1)
}

function setCalcField(){
    calcField = document.getElementById("valueField")
}

// calculator 2
function add(){
    var value1 = +document.getElementById("value1").value
    var value2 = +document.getElementById("value2").value

    alert(value1+value2)
}


function minus(){
    var value1 = +document.getElementById("value1").value
    var value2 = +document.getElementById("value2").value

    alert(value1-value2)
}


function devide(){
    var value1 = +document.getElementById("value1").value
    var value2 = +document.getElementById("value2").value

    alert(value1/value2)
}


function multiply(){
    var value1 = +document.getElementById("value1").value
    var value2 = +document.getElementById("value2").value

    alert(value1*value2)
}