// test
console.log("Hello!");

// declare variables

var scheduleTime = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];
// var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");

//displays time in element with current day id, need to condense down to day, using moment
var currentTime = (document.getElementById("currentDay").textContent = Date());

//displays time in element with current day id, need to condense down to day, using moment
// document.getElementById("currentDay").textContent = Date();

// use jQuery

//color code timeblocks based on past, present or future
function getStyleSheet() {}

// save event entered into timeblock when button is clicked (text area)
// make sure saved information is in local storage when page is refreshed
function saveEvent() {
  // event needs to be saved in local storage
  localStorage.setItem();
}
