var date = new Date();
var calendar, scheduler;

$(document).ready(function() {
    calendar = new Calendar();
    calendar.fill();

    scheduler = new SchedulerControl();
});

function promptForEvent(dayElement) {
    var eventName = prompt("Enter a name for the event.");

    if(eventName) {

        var newEvent = new CalendarEvent(eventName);
        var eventElement = new CalendarEventElement(newEvent);

        this.calendar.addEvent(eventElement, dayElement);
    }
}

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


