const form = document.getElementById("lista-contato");

let linhas = " ";

    form.addEventListener("submit", function (e) {
    e.preventDefault()

    const InputNome = document.getElementById('nome-contato')
    const InputDDD = document.getElementById('DDD')
    const Inputnumero= document.getElementById('numero-contato')

        let linha = '<tr>'
        linha += `<td>${InputNome.value} </td>`
        linha += `<td>${InputDDD.value} </td>`
        linha += `<td>${Inputnumero.value}</td>`
        linha += "</tr>"

        linhas += linha;

        const corpoTabela = document.querySelector("tbody")
        corpoTabela.innerHTML = linhas;

        InputNome.value = " "
        InputDDD.value = " "
        Inputnumero.value = " "


})