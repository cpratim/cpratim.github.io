const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c265a3574mshbc1cca717a8a3adp1a6359jsnb33733cf16c1',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};

let date = new Date();  
let hours = date.getHours(); 
let minutes = date.getMinutes();
let day = date.getDate()
let month = date.getMonth() + 1
let seconds = date.getSeconds();

let dateFactTitle = document.getElementById("date-fact-title");
let dateFact = document.getElementById("date-fact");
let hourFactTitle = document.getElementById("hour-fact-title");
let hourFact = document.getElementById("hour-fact");
let minuteFactTitle = document.getElementById("minute-fact-title");
let minuteFact = document.getElementById("minute-fact");
let secondFactTitle = document.getElementById("second-fact-title");
let secondFact = document.getElementById("second-fact");

function processMinuteFact(data) {
    minuteFactTitle.innerHTML = `Minute: ${minutes}`
    minuteFact.innerHTML = data.text;
}

function processHourFact(data) {
    hourFactTitle.innerHTML = `Hour: ${hours}`
    hourFact.innerHTML = data.text;
}

function processDateFact(data) {
    dateFactTitle.innerHTML = `Date: ${month}-${day}-[${data.year}]`
    dateFact.innerHTML = data.text;
}

function processSecondFact(data) {
    secondFactTitle.innerHTML = `Second: ${seconds}`
    secondFact.innerHTML = data.text;
}

document.addEventListener("DOMContentLoaded", () => {

    if (window.location.href.substring(0, 5) != 'https') {
        window.location.href = 'https://cpratim.studio';
    }

    fetch(`https://numbersapi.p.rapidapi.com/${minutes}/math?json=true&fragment=true`, options)
        .then(response => response.json())
        .then(response => processMinuteFact(response))
        .catch(err => console.error(err));

    fetch(`https://numbersapi.p.rapidapi.com/${hours}/math?json=true&fragment=true`, options)
        .then(response => response.json())
        .then(response => processHourFact(response))
        .catch(err => console.error(err));

    fetch(`https://numbersapi.p.rapidapi.com/${seconds}/math?json=true&fragment=true`, options)
        .then(response => response.json())
        .then(response => processSecondFact(response))
        .catch(err => console.error(err));

    fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true&fragment=true`, options)
        .then(response => response.json())
        .then(response => processDateFact(response))
        .catch(err => console.error(err));


});

