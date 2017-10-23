function DayCell(day) {
    this.day = day;
    this.events = [];

    this.element = document.createElement('div');
    this.element.className = "day";
    this.element.innerHTML = day.getDate();
    var _this = this;

    $(this.element).droppable({
        over: function(event, ui) {
            ui.draggable.detach().appendTo($(this));
        }
    });

    $(this.element).on("click", function() {
        _this.promptForEvent();
    });

    if (this.day.getDate() == 1)
        this.element.style.gridColumn = this.day.getDayOfWeek() + 1;
    
    if (day.getDayOfWeek() == 0 || day.getDayOfWeek() == 6)
        this.element.className += " red";

    var today = new Date();
    if (this.day.getDate() == today.getDate() && this.day.getYear() == today.getUTCFullYear() && this.day.getMonth() == today.getMonth())
        this.element.className += " today";

    this.promptForEvent = function() {
        var eventName = prompt("Enter a name for the event.");
    
        if(eventName) {
            this.events.push(new CalendarEvent(eventName));
            this.renderEvents();
        }
    }

    this.renderEvents = function() {
        this.element.innerHTML = "";
        $.each(_this.events, function(index, item) {
            var eventElement = new CalendarEventElement(item);
            _this.addEvent(eventElement);
        });
        
    }    

    this.addEvent = function(eventElement) {
        
        var dayElement = $(this.element);

        if(dayElement.children(".event").length >= 2) {

            if($(".event.more").length == 0) {
                var moreElement = $("<div>").attr("class", "event more ui-widget-content");
                dayElement.append(moreElement);
    
                moreElement.text("+ " + (this.events.length - 2) + " more");
            }
            else {
                $(".event.more").text("+ " + (this.events.length - 2) + " more");
            }

            

            return;
        }

        dayElement.append(eventElement.element);
    }
}