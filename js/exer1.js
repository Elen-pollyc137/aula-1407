var form = document.getElementById("form1");
var button = document.getElementById("calculo");

button.addEventListener('click', (e) => {
    var alcool = document.getElementById("alcool").value;
    var gasolina = document.getElementById("gasolina").value;
    var resultado = document.getElementById("resposta");

    var porcentagem = (gasolina * 70) / 100;
    console.log(porcentagem)
    if (alcool >= porcentagem) {

        resultado.innerHTML = 'A gasolina esta compensando'
    }
    else {
        resultado.innerHTML = 'O alcool esta compesando'
    }
})