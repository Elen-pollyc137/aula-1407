var agenda = []
var buton = document.getElementById("Cadastrar")
var butonlistar = document.getElementById("lista")
buton.addEventListener('click', (e) => {
    var product = {
        nome: document.getElementById("nome").value,
    }
    agenda.push(product)

})
butonlistar.addEventListener('click', (e) => {
    var resultado = document.getElementById("resposta4");


    agenda.forEach((item) => {
        var value = document.createElement("li")
        value.innerHTML = "<div class='card'> Nome: " + item.nome + "</div>";
        resultado.appendChild(value)
    })
})
