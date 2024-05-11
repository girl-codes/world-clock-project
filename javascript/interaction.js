function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = moment().format("Do MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  let cagliariElement = document.querySelector("#cagliari");
  let cagliariDateElement = cagliariElement.querySelector(".date");
  let cagliariTimeElement = cagliariElement.querySelector(".time");
  let cagliariTime = moment().tz("CET");

  cagliariDateElement.innerHTML = moment().format("Do MMMM YYYY");
  cagliariTimeElement.innerHTML = cagliariTime.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city"> 
<div>
<h2>${cityName}<h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("HH:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
</div>
<a href="index.html"> Back to main cities </a> 
`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
