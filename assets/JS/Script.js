

let apiKey="2af9e902c491e50f4d7a7dbaa52ae4c3"

// let cityName="london"


// let apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" +apiKey

// console.log(apiURL)

function findCityName(){
    let cityName = titleCase($("#cityName")[0].value.trim());

   let apiURL= "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" +apiKey
   
  let weatherdata= fetch(apiURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {

                $("#cityName"-input)[0].textContent = cityName + " (" + moment().format('M/D/YYYY') + ")";

                $("#city-list").append('<button type="button" class="list-group-item list-group-item-light list-group-item-action city-name">' + cityName);
console.log(apiURL)
               let lattitude = data.coord.lat;
               let longittude = data.coord.lon;

               let Cordinates = lattitude.tostring() + " " + longittude.tostring();

               console.log(Cordinates)

              
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

