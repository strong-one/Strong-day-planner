$(document).ready(function () {
  // WRITE ALL JQUERY INSIDE THIS FUNCTION

  // VARIABLE DECLORATIONS, TOP - FUNCTIONS, MIDDLE - EVENT HANDLERS, BOTTOM

  // DISPLAY DATE TO USER
  // grab reference to element that we want time to be displayed
  var currentDay = $("#currentDay");

  // display current date in p element
  currentDay.text(moment().format("dddd, MMM Do"));

  //style 2 elements one past and one future and set statically

  //currently able to write text in area, but cannot capture data, not storing in local storage. dissapears apon refresh

  // Dynamically style timeblocks based on time
  // function responsible for checking time and determining what class to add past present or future
  function checkTime() {
    // grab current hour using moment.js
    var currentHour = moment().hours();
    //console.log(currentHour);

    // check current hour against the blockHour
    // if/else

    // need to grab hour for the timeblock
    // loop through timeblock hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      //console.log(blockHour); not showing in console

      // check current hour against the blockHour
      // if/else
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      }
    });

    // check current hour against the blockHour
    // if/else
  }
  checkTime();

  // event handler

  $(".saveBtn").on("click", function () {
    //console.log("clicked");
    // need to capture information that user inputed and store to local storage

    // need to captue value of input and what time it was set at
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    //console.log("time");

    // set local storage
    //time/value are variables made above
    // set item saves to local
    localStorage.setItem(time, value);
  });

  // display items in local storage to time blocks
  // get item displays items saved in local storage
  // try and create a for loop (.each) for saved local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
