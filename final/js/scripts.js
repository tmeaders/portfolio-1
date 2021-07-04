/* ---------------- Display the copyright year ----------------------------------------- */
let date = new Date();
let currentyear = date.getFullYear();
/*let lastupdate = document.lastModified;
document.getElementById("lastupdate").innerHTML = lastupdate;*/
document.getElementById("year").innerHTML = currentyear;


/* -------------- Display the day of the week, month by name, and year ------------------- */

try {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  document.getElementById('lastupdate').textContent = new Date().toLocaleDateString('en-US', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}



function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
