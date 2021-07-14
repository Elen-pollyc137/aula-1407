var form = document.getElementById("form2");
var button = document.getElementById("reajuste");

button.addEventListener('click', () => {
    var salario = document.getElementById("salario").value;
    var resposta = document.getElementById("resposta2");
    console.log(salario)
    if (salario <= 280) {
        var reajuste = (salario * 1.2)
        reajuste = reajuste;
        resposta.innerHTML = reajuste + "  Salario reajustado"

    }

    else if (salario <= 700) {
        var reajuste = (salario * 1.15)
        reajuste = reajuste;
        resposta.innerHTML = reajuste + "  Salario reajustado"

    }
    else if (salario <= 1500) {
        var reajuste = (salario * 1.1)
        reajuste = reajuste;
        resposta.innerHTML = reajuste + "  Salario reajustado"
    }

    else {
        var reajuste = (salario * 1.05)
        reajuste = reajuste;
        resposta.innerHTML = reajuste + "  Salario reajustado"

    }
})