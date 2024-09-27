const elTemps = "https://api.openweathermap.org/data/2.5/weather?q=Vic,ES&units=metric&lang=ca&appid=de23ce1cc7a6a24dc66917b4465dff55";

const ciutat = document.getElementById("ciutat");
const tempsMin = document.getElementById("tempsmin");
const tempsMax = document.getElementById("tempsmax");
const nuvols = document.getElementById("nuvols");

fetch(elTemps)
.then((response) => response.json())
.then((data) => {

    console.log(data);
    console.log(data.name);

    ciutat.innerHTML = data.name;
    tempsMin.innerHTML = data.main.temp_min + "ºC mínima";
    tempsMax.innerHTML = data.main.temp_max + "ºC màxima";
    nuvols.innerHTML = data.weather[0].description;
})