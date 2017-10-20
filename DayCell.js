function DayCell(day) {
    this.day = day;

    this.element = document.createElement('div');
    this.element.className = "day";
    this.element.innerHTML = day.getDate();

    $(this.element).droppable({
        over: function(event, ui) {
            ui.draggable.detach().appendTo($(this));
        }
    });

    if (this.day.getDate() == 1)
        this.element.style.gridColumn = this.day.getDayOfWeek() + 1;
    
    if (day.getDayOfWeek() == 0 || day.getDayOfWeek() == 6)
        this.element.className += " red";

    var today = new Date();
    if (this.day.getDate() == today.getDate() && this.day.getYear() == today.getUTCFullYear() && this.day.getMonth() == today.getMonth())
        this.element.className += " today";
    
}