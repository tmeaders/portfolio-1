/* --------------- Usually this is called endpoint but we are using apiURL in this exercise ----------*/
const weathreURL =
  "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=466dca7cca93940a33882268fd25bd99";

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    /*
     *  Here I am creating a variable and then I am going to populate
     *  it with information from the weather object
     */
    const curtemp = document.querySelector("#current-temp");

    /*
     * In this line of code I am selecting 'temp' from 'main' within
     * the object
     */
    curtemp.innerHTML = jsObject.main.temp;

    /*
     *  In this line of code I am creating contast variables, for the purpose 
     *  of selecting an image icon from the object
     */
    const iconsrc = document.querySelector('#imagesrc');
    const weathericon = document.querySelector('#icon');
    
    /*
     *  Here I am using string interpellation to get the information from the object
     *  the back-tic is used (which is the key above of the keyboard tab key)
     *  by using JSON that's the '$'
     *  
     * below is just used for code test that shows the source path
     * iconsrc.textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
     */

    /* 
     *  Here I am fist creating a constant variable for the purpose of
     *  displaying the content by selecting the attributes. This is DOM manipulation.
     */
    const isrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    weathericon.setAttribute('src', isrc);
    weathericon.setAttribute('alt', jsObject.weather[0].description);
  });
