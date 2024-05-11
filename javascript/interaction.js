function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment().format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisTime.format(
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

updateTime();
setInterval(updateTime, 1000);
