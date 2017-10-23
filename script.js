var date = new Date();
var calendar, scheduler;

$(document).ready(function() {
    calendar = new Calendar();
    calendar.fill();

    scheduler = new SchedulerControl();
});

function prev() {
    calendar.clearDays();

    date = new Date(date.getUTCFullYear(), date.getMonth(), 0);

    calendar.fill();
}

function next() {
    calendar.clearDays();

    date = new Date(date.getUTCFullYear(), date.getMonth() + 1, 2);

    calendar.fill();
}


