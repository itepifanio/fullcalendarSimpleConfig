function addEvent(containerEl, start, end, jsEvent, view) {
    //var allDay = !start.hasTime && !end.hasTime;
    if (view.name !== 'month') {
        var newEvent = new Object();
        newEvent.title = 'Colocar o nome da disciplina aqui';
        newEvent.start = moment(start).format();
        newEvent.allDay = false;
        containerEl.fullCalendar('renderEvent', newEvent);
    }
}

export {addEvent};
