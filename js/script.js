// adds the last modified time to variable lastModified
var lastModified = document.lastModified;
// sends lastmodified time to <span id="last_modified"></span> in footer
document.querySelector("#last_modified").innerHTML = lastModified;

// gets current year and stores in year
var year = new Date().getFullYear();
// sends current year to <span id="year"></span> in footer
document.querySelector("#year").innerHTML = year;


//date last modified
let updateDate = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let weekDay = days[updateDate.getDay()];
let month = months[updateDate.getMonth()];
let dayOfMonth = updateDate.getDate();
let year = updateDate.getUTCFullYear();

document.getElementById("dateModified").innerHTML = weekDay + ", " + month + " " + dayOfMonth + " " + year;

//copyright current year
let myDate = new Date();
let currentYear = myDate.getFullYear();
document.getElementById("demo").innerHTML = currentYear;

//toggle menu button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");

    if (document.getElementById("primaryNav").className == "hide") {
        document.getElementById("menuButton").innerHTML = "&#9776;";
    } else {
        document.getElementById("menuButton").innerHTML = "&#10006;";
    }
}