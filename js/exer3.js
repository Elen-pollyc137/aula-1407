var agenda = []
var buton = document.getElementById("Cadastrar")
var butonlistar = document.getElementById("lista")
buton.addEventListener('click', (e) => {
    var product = {
        mat: document.getElementById("mat").value,
        nome: document.getElementById("nome").value,
        valor: document.getElementById("valor").value,
    }
    agenda.push(product)

})
butonlistar.addEventListener('click', (e) => {
    var resultado = document.getElementById("lista-1");


    agenda.forEach((item) => {
        var value = document.createElement("li")
        value.innerHTML = "<div class='card'> ID: " + item.mat + "<br>  Nome: " + item.nome + " Valor: " + item.valor + "</div>";
        resultado.appendChild(value)
    })


})