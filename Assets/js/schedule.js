var time = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var tasks = ["1", "2", "3", "", "", "", "", "", ""]



var createTask = function() {
    let task = "";
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
        task += `<div class="col-9 text-center" id="input" placeholder="add task here">${tasks[i]}</div>`
    } return task
};

var editTask = function() {

};

var test = function() {
let items = "";
for (let i = 0; i < time.length; i++) {
console.log(time[i]);
items += `<li>${time[i]}</li>`;
}
return items;
}

//edit task bt clicking on the field
$(".input").on("click", "div", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>").val(text)
$(this).replaceWith(textInput);
textInput.trigger("focus");
});

//edit task was unfocus
$(".input").on("blur", "textarea", function() {
    var text = $(this).val().trim();
    var status = $(this).closest(".input","");
    var taskP = $()
});

// document.querySelector("#input").innerHTML = `<div> ${createTask(tasks)} </div>`;
// document.querySelector("#hour").innerHTML = `<ol>${test(time)}</ol>`;
