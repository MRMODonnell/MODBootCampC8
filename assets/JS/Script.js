localStorage.clear();

let apiKey="2af9e902c491e50f4d7a7dbaa52ae4c3"

let cityName="london"


// let apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" +apiKey

// console.log(apiURL)

function findCityName(){
    // let cityName = $("#search-input");

   let apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" +apiKey
   
   fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {

               console.log(apiURL)

                
            })
        } else {
            alert("I'm Sorry - you might have mispelt the city name wrong - the system has been unable to find the city requested - please try again");
        }
    })
}

$("#search-button").on("click", function () {
    event.preventDefault();

    findCityName();

    $("form")[0].reset();
})