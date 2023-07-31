const key = "9ce6c460b4b50917ac26ea18a03474c2"

function search(){
    const city = document.querySelector(".search-input").value

    searchCity(city)
}

async function searchCity(city){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    inputDataInScreen(dados)
}

function inputDataInScreen(dados){
document.querySelector(".city").innerHTML = dados.name
document.querySelector(".degress").innerHTML = dados.main.temp+"°c"
document.querySelector(".type-weather").innerHTML = "Tempo: " + "" +dados.weather[0].description
document.querySelector(".humidity").innerHTML = "Umidade: " + " " +dados.main.humidity+"%"

console.log(dados)
}