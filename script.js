// Para realizar o JS, temos que iniciar pela lógica de programação, e depois, realizar toda a estrutura do código 

const key = "1a8bff316a41c164bde83e25d21b320d"


function colocarDadosNaTela(dados) {
    document.querySelector(".title-status").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector(".p-status").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector(".icone-info-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


// toda vez que acessarmos um servidor, temos que usar uma function async

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response =>  response.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}