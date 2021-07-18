const sevendayURL ="https://api.openweathermap.org/data/2.5/weather?q={city name}&units=imperial&appid=466dca7cca93940a33882268fd25bd99";
fetch(sevendayURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    /*
     *  I am creating a variable then filtering the forecast array looking for the time 18:00:00:00
     *  I am also using an 'includes' in my filter (Referred ta as functional using filters)
     */
    //const forecast = jsObject.list.filter((x) => x.dt_txt.includes("18:00:00")); ***To Delete
    const forecast = jsObject.daily;
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day = 1; day < forecast.length; day++) {
      const d = new Date(0);
d.setUTCSeconds(forecast[day].dt);
      //const d = new Date(forecast[day].dt_txt);
      const imagesrc =
        "https://openweathermap.org/img/w/" +
        forecast[day].weather[0].icon +
        ".png";
      const desc = forecast[day].weather[0].description;

      document.getElementById(`dayofweek${day}`).textContent =
        weekdays[d.getDay()];
      document.getElementById(`forecast${day}`).textContent = Math.round(
        forecast[day].temp.day
      );
      document.getElementById(`icon${day}`).setAttribute("src", imagesrc);
      document.getElementById(`icon${day}`).setAttribute("alt", desc);
    }
  });
