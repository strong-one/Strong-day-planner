// declare variables

var scheduleTime = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5"];

//displays time in element with current day id, need to condense down to day, using moment

var currentTime = moment();
$("#currentDay").text(
  currentTime.format("[Today is ]MMM Do, YYYY, h:mm:ss a ")
);

// use jQuery

//color code timeblocks based on past, present or future
function timeColor() {}

// save event entered into timeblock when button is clicked (text area)
// make sure saved information is in local storage when page is refreshed
function saveEvent() {
  // event needs to be saved in local storage
  localStorage.setItem();
}
