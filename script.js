var date = new Date();

$(document).ready(function() {
    fillCalendar();

    $(document).on("dblclick", ".day", function(click) {
        var day = $(click.currentTarget);
        
        promptForEvent(day);
    });
});

function promptForEvent(dayElement) {
    var eventName = prompt("Enter a name for the event.");

    if(eventName) {

        var newEvent = new CalendarEvent(eventName);
        var eventElement = createEventElement(newEvent);

        addEventToCalendar(eventElement, dayElement);
    }
}

function addEventToCalendar(eventElement, dayElement) {

    if(dayElement.children(".event").length >= 2) {
        var moreElement = $("<div>").attr("class", "event more");
        dayElement.append(moreElement);

        moreElement.text("+ " + (dayElement.children(".event").length - 2) + " more")

        return;
    }

    dayElement.append(eventElement);
}

function fillCalendar() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = document.getElementById("month");
    month.innerHTML = monthNames[date.getMonth()];

    var year = document.getElementById("year");
    year.innerHTML = date.getUTCFullYear();

    var lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1, 0).getDate();

    var calendar = document.getElementById("calendar");

    for (var dayNumber = 1; dayNumber <= lastDay; dayNumber++) {
        var day = document.createElement('div');
        day.className = "day";
        day.innerHTML = dayNumber;

        if (dayNumber == 1)
            day.style.gridColumn = new Date(date.getUTCFullYear(), date.getMonth(), 1).getDay() + 1;
        
        var dayOfWeek = new Date(date.getUTCFullYear(), date.getMonth(), dayNumber).getDay()
        if (dayOfWeek == 0 || dayOfWeek == 6)
            day.className += " red";

        var today = new Date();
        if (dayNumber == today.getDate() && date.getUTCFullYear() == today.getUTCFullYear() && date.getMonth() == today.getMonth())
            day.className += " today";

        calendar.appendChild(day);
    }
}

function removeDays() {
    var calendar = document.getElementById("calendar");
    calendar.innerHTML = "";
}

function prev() {
    removeDays();

    date = new Date(date.getUTCFullYear(), date.getMonth(), 0);

    fillCalendar();
}

function next() {
    removeDays();

    date = new Date(date.getUTCFullYear(), date.getMonth() + 1, 2);

    fillCalendar();
}

function createEventElement(ev) {
    var element = $("<div>").attr("class", "event");
    element.text(ev.name);
    
    return element;
}


