var date = document.getElementById("currentDay");
var textarea = document.querySelectorAll("textarea");
var currentHour = (moment().hour());
let hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

date.textContent = moment().format('dddd, MMMM Do');


function timeIndicator () {
 // loop over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // check and add classes according to time
    if (blockTime < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}

$(".saveBtn").on("click", function () {
    var tasks = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text into local storage
    localStorage.setItem(time, tasks);
})

// loop through the local storage to get stored tasks
for (var i = 0; i <localStorage.length; i++) {
    $("#hour" + hour[i] + " .description").val(localStorage.getItem("hour" + hour[i]))
};

timeIndicator();