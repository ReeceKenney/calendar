function SchedulerControl() {
    this.header;
    this.timeline;
    

    this.createHeader = function() {
        this.header = $("<div>").attr("class", "schedulerHeader");
        var title = $("<h3>").text("Scheduler");
        this.header.append(title);

        $("#scheduler").append(this.header);
    }

    this.createTimeStamps = function(container){
        var timestamps = $("<div>").attr("class", "timestamps");

        for(var i = 0; i < 24; i++) {
            var item = $("<div>").attr("class", "timestampItem");
            item.text(i + ":00");
            timestamps.append(item);
        }

        container.append(timestamps);
    }

    this.createTimeline = function(container) {
        this.timeline = $("<div>").attr("class", "timeline");

        for(var i = 0; i < 24; i++) {
            var item = $("<div>").attr("class", "timelineItem");
            this.timeline.append(item);
        }
    }

    this.createScheduler = function() {

        var container = $("<div>").attr("class", "schedulerbody");
        this.createTimeStamps(container);
        this.createTimeline(container);

        container.append(this.timeline);

        $("#scheduler").append(container);
    }
    
    this.createHeader();
    this.createScheduler();
};