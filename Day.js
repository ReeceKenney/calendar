function Day(date) {
    this.date = date;

    this.getDayOfWeek = function() {
        return this.date.getDay();
    }

    this.getDate = function() {
        return this.date.getDate();
    }

    this.getMonth = function() {
        return this.date.getMonth();
    }

    this.getYear = function() {
        return this.date.getUTCFullYear();
    }
}