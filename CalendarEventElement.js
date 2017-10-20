function CalendarEventElement(calendarEvent) {

    this.element = $("<div>");

    this.element.attr("class", "event ui-widget-content");
    this.element.text(calendarEvent.name);
    this.element.draggable({
        helper:"clone",
        cursor: "pointer",
        containment:"document"
    });

}