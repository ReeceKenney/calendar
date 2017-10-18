var date = new Date();

$(document).ready(function() {
    fillCalendar();
});

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
        if (new Date(date.getUTCFullYear(), date.getMonth(), dayNumber).getDay() == 0)
            day.className += " red";

        var today = new Date();
        if (dayNumber == today.getDate() && date.getUTCFullYear() == today.getUTCFullYear() && date.getMonth() == today.getMonth())
            day.className += " today";

        getEvents(day, dayNumber);

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

function getEvents(day, dayNumber) {
    if(dayNumber == 10 || dayNumber == 11 || dayNumber == 12 || dayNumber == 13) {
        var ev = $("<div>").attr("class", "event");
        ev.text("Convention");

        if(dayNumber == 10) {
            ev.addClass("start");
        }
        else if(dayNumber == 13) {
            ev.addClass("end");
        }

        $(day).append(ev);
    }
}


